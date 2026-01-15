
import { GoogleGenAI, Type } from "@google/genai";

// Ensure we have a valid key before initialization
const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey || apiKey === "undefined") {
    console.warn("Gemini API Key is missing. Using fallback content.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const getDirectorInsights = async (context: string) => {
  const ai = getAIClient();
  
  if (!ai) {
    return {
      summary: "Visionary leadership dedicated to elevating educational standards at Issarapon School.",
      vision: "Leading the next generation of global citizens through innovative and compassionate education.",
      strategy: "Focusing on digital transformation, character building, and academic rigor."
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a professional visionary statement for Koki Yamagishi, the School Director of Issarapon School. Context: ${context}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING, description: "A concise executive summary of leadership style." },
            vision: { type: Type.STRING, description: "A bold vision statement for the future of Issarapon School." },
            strategy: { type: Type.STRING, description: "Key strategic pillars for educational excellence." }
          },
          required: ["summary", "vision", "strategy"]
        }
      }
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("Empty response from Gemini API");
    }
    return JSON.parse(resultText.trim());
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      summary: "Leading with innovation and integrity at Issarapon School.",
      vision: "To create a world-class learning environment that nurtures tomorrow's leaders.",
      strategy: "Empowerment through modern pedagogy and community engagement."
    };
  }
};

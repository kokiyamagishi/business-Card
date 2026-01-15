
import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import ThreeScene from './components/ThreeScene';
import Overlay from './components/Overlay';

const Loader = ({ onFinish }: { onFinish?: () => void }) => {
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSkip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#020617] text-white z-[100]">
      <div className="relative">
        <div className="w-16 h-16 border-2 border-blue-600/30 border-t-blue-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-indigo-600/30 border-t-indigo-500 rounded-full animate-spin reverse-spin" style={{ animationDirection: 'reverse' }}></div>
        </div>
      </div>
      
      <div className="mt-8 text-center px-4">
        <h2 className="text-2xl font-bold tracking-[0.2em] italic font-serif">KOKI YAMAGISHI</h2>
        <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-widest animate-pulse">3Dエクスペリエンスを初期化中</p>
      </div>

      {showSkip && (
        <button 
          onClick={onFinish}
          className="mt-12 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-xs tracking-widest hover:bg-white/10 transition-all backdrop-blur-sm animate-fade-in"
        >
          読み込みをスキップして進む
        </button>
      )}
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const App: React.FC = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 100); 
  }, []);

  return (
    <div className="h-screen w-full relative">
      <Suspense fallback={<Loader onFinish={() => setReady(true)} />}>
        <Canvas 
          shadows 
          camera={{ position: [0, 0, 5], fov: 75 }}
          className="bg-[#020617]"
          onCreated={() => setReady(true)}
        >
          {/* pagesを2に減らす (ヒーローとお問い合わせの2ページ構成) */}
          <ScrollControls pages={2} damping={0.2}>
            <Scroll>
              <ThreeScene />
            </Scroll>
            <Scroll html>
              <Overlay />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </Suspense>
      {!ready && <Loader onFinish={() => setReady(true)} />}
    </div>
  );
};

export default App;

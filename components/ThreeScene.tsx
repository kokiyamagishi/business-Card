
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { 
  Float, 
  Stars, 
  MeshDistortMaterial, 
  Sphere, 
  useScroll,
  PerspectiveCamera,
  Environment
} from '@react-three/drei';
import * as THREE from 'three';

// Fix: Define R3F core elements as constants to avoid JSX namespace errors
const ThreeGroup = 'group' as any;
const ThreeColor = 'color' as any;
const ThreeFog = 'fog' as any;
const ThreeAmbientLight = 'ambientLight' as any;
const ThreePointLight = 'pointLight' as any;
const ThreeSpotLight = 'spotLight' as any;

const FloatingShape = ({ position, color, speed, distort, radius }: any) => {
  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
      <Sphere position={position} args={[radius, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={speed}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const EducationNodes = () => {
  const scroll = useScroll();
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const offset = scroll.offset;
    groupRef.current.position.y = offset * 20;
    groupRef.current.rotation.y = offset * Math.PI;
    
    // Smooth camera transition
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 5 + offset * 5, 0.05);
  });

  return (
    <ThreeGroup ref={groupRef}>
      {/* Hero Central Piece */}
      <FloatingShape position={[0, 0, 0]} color="#3b82f6" speed={1.5} distort={0.4} radius={1.5} />
      
      {/* Orbiting Elements */}
      <FloatingShape position={[-5, -10, -2]} color="#6366f1" speed={2} distort={0.3} radius={0.8} />
      <FloatingShape position={[5, -20, -3]} color="#8b5cf6" speed={2.5} distort={0.5} radius={1.2} />
      <FloatingShape position={[-4, -30, 1]} color="#ec4899" speed={1.8} distort={0.4} radius={0.7} />
      
      {/* Labels in 3D Space - 全てのテキストラベルを削除 */}
    </ThreeGroup>
  );
};

const Background = () => {
  return (
    <>
      <ThreeColor attach="background" args={['#020617']} />
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
      <ThreeFog attach="fog" args={['#020617', 5, 25]} />
    </>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
      <ThreeAmbientLight intensity={0.4} />
      <ThreePointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
      <ThreeSpotLight position={[-10, 20, 10]} angle={0.2} penumbra={1} intensity={1.5} color="#8b5cf6" />
      <Background />
      <EducationNodes />
      <Environment preset="night" />
    </>
  );
};

export default ThreeScene;

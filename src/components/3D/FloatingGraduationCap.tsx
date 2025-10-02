import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

export const FloatingGraduationCap = () => {
  const meshRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.3;
    }
  });
  
  return (
    <group ref={meshRef}>
      {/* Cap base (mortar board) */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[2, 0.1, 2]} />
        <meshStandardMaterial 
          color="#1e293b" 
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>
      
      {/* Cap top */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.6, 0.8, 0.6, 32]} />
        <meshStandardMaterial 
          color="#1e293b" 
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>
      
      {/* Tassel button */}
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.1, 32]} />
        <meshStandardMaterial 
          color="#fbbf24" 
          metalness={0.8}
          roughness={0.2}
          emissive="#fbbf24"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Tassel */}
      <mesh position={[0.8, 0.35, 0.8]} rotation={[0.3, 0, 0.3]}>
        <cylinderGeometry args={[0.08, 0.15, 0.8, 16]} />
        <meshStandardMaterial 
          color="#fbbf24" 
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>
    </group>
  );
};

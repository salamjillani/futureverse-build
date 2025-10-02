import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

export const FloatingCertificate = () => {
  const meshRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.25;
    }
  });
  
  return (
    <group ref={meshRef}>
      {/* Certificate paper */}
      <mesh>
        <boxGeometry args={[2.5, 1.8, 0.05]} />
        <meshStandardMaterial 
          color="#fef3c7" 
          roughness={0.8}
        />
      </mesh>
      
      {/* Gold border */}
      <mesh position={[0, 0, 0.03]}>
        <boxGeometry args={[2.3, 1.6, 0.02]} />
        <meshStandardMaterial 
          color="#d97706" 
          metalness={0.8}
          roughness={0.2}
          emissive="#fbbf24"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Seal */}
      <mesh position={[0.8, -0.5, 0.06]}>
        <cylinderGeometry args={[0.25, 0.25, 0.05, 32]} />
        <meshStandardMaterial 
          color="#dc2626" 
          metalness={0.7}
          roughness={0.3}
          emissive="#ef4444"
          emissiveIntensity={0.4}
        />
      </mesh>
    </group>
  );
};

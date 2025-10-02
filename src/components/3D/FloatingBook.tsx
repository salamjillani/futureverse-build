import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

export const FloatingBook = () => {
  const meshRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });
  
  return (
    <group ref={meshRef}>
      {/* Book cover */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 2, 0.3]} />
        <meshStandardMaterial 
          color="#2563eb" 
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>
      
      {/* Book pages */}
      <mesh position={[0, 0, -0.14]}>
        <boxGeometry args={[1.4, 1.9, 0.25]} />
        <meshStandardMaterial color="#f8fafc" />
      </mesh>
      
      {/* Bookmark */}
      <mesh position={[0, 1.2, 0.16]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[0.2, 0.8, 0.02]} />
        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
};

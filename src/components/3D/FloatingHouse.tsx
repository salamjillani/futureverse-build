import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

export const FloatingHouse = () => {
  const meshRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });
  
  return (
    <group ref={meshRef}>
      {/* House base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1.5, 2]} />
        <meshStandardMaterial color="#E8DDD5" />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, 1.2, 0]}>
        <coneGeometry args={[1.6, 1, 4]} />
        <meshStandardMaterial color="#8B7355" />
      </mesh>
      
      {/* Door */}
      <mesh position={[0, -0.3, 1.01]}>
        <boxGeometry args={[0.5, 0.9, 0.05]} />
        <meshStandardMaterial color="#6B5D52" />
      </mesh>
      
      {/* Windows */}
      <mesh position={[-0.6, 0.2, 1.01]}>
        <boxGeometry args={[0.4, 0.4, 0.05]} />
        <meshStandardMaterial color="#87CEEB" emissive="#87CEEB" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0.6, 0.2, 1.01]}>
        <boxGeometry args={[0.4, 0.4, 0.05]} />
        <meshStandardMaterial color="#87CEEB" emissive="#87CEEB" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
};

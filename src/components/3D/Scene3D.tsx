import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float } from '@react-three/drei';
import { FloatingHouse } from './FloatingHouse';

interface Scene3DProps {
  autoRotate?: boolean;
  children?: React.ReactNode;
}

export const Scene3D = ({ autoRotate = true, children }: Scene3DProps) => {
  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[0, 2, 8]} />
      <OrbitControls 
        enableZoom={false} 
        autoRotate={autoRotate} 
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
      
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ffd700" />
      
      <Environment preset="sunset" />
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        {children || <FloatingHouse />}
      </Float>
      
      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#1a4d2e" opacity={0.3} transparent />
      </mesh>
    </Canvas>
  );
};

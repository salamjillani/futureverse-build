import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2, ArrowRight, CheckCircle2, HardHat, Home, Hammer, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, Suspense } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

// 3D Construction Site Environment
const ConstructionSite = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Ground / Construction site base */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#8B7355" roughness={0.9} />
      </mesh>

      {/* Main house foundation */}
      <group position={[0, -1.5, 0]}>
        {/* Foundation */}
        <mesh>
          <boxGeometry args={[6, 0.5, 8]} />
          <meshStandardMaterial color="#4A4A4A" roughness={0.8} />
        </mesh>
        
        {/* Walls being built */}
        <mesh position={[-2.75, 1.5, 0]}>
          <boxGeometry args={[0.5, 3, 8]} />
          <meshStandardMaterial color="#D2B48C" roughness={0.7} />
        </mesh>
        <mesh position={[2.75, 1.5, 0]}>
          <boxGeometry args={[0.5, 3, 8]} />
          <meshStandardMaterial color="#D2B48C" roughness={0.7} />
        </mesh>
        <mesh position={[0, 1.5, -3.75]}>
          <boxGeometry args={[6, 3, 0.5]} />
          <meshStandardMaterial color="#D2B48C" roughness={0.7} />
        </mesh>
        <mesh position={[0, 1.5, 3.75]}>
          <boxGeometry args={[6, 3, 0.5]} />
          <meshStandardMaterial color="#D2B48C" roughness={0.7} />
        </mesh>

        {/* Roof frame (under construction) */}
        {[-2, -1, 0, 1, 2].map((x, i) => (
          <mesh key={`beam-${i}`} position={[x * 1.2, 3.5, 0]} rotation={[0, 0, Math.PI / 6]}>
            <boxGeometry args={[0.2, 0.2, 9]} />
            <meshStandardMaterial color="#8B4513" roughness={0.8} />
          </mesh>
        ))}
      </group>

      {/* Construction crane */}
      <group position={[8, 0, 5]}>
        {/* Crane base */}
        <mesh position={[0, -1, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Crane tower */}
        <mesh position={[0, 4, 0]}>
          <boxGeometry args={[0.5, 10, 0.5]} />
          <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Crane arm */}
        <mesh position={[-4, 9, 0]} rotation={[0, 0, -Math.PI / 12]}>
          <boxGeometry args={[8, 0.3, 0.3]} />
          <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Hook */}
        <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
          <mesh position={[-7, 7, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 2]} />
            <meshStandardMaterial color="#333333" metalness={0.9} />
          </mesh>
        </Float>
      </group>

      {/* Material stacks */}
      <group position={[-8, -1.5, -5]}>
        {/* Wood planks */}
        {[0, 0.15, 0.3, 0.45].map((y, i) => (
          <mesh key={`plank-${i}`} position={[0, y, 0]}>
            <boxGeometry args={[3, 0.1, 0.5]} />
            <meshStandardMaterial color="#8B4513" roughness={0.8} />
          </mesh>
        ))}
      </group>

      <group position={[-8, -1.5, -2]}>
        {/* Bricks */}
        {[0, 0.3, 0.6].map((y, i) => (
          <group key={`brick-layer-${i}`} position={[0, y, 0]}>
            {[0, 0.7, 1.4].map((x, j) => (
              <mesh key={j} position={[x, 0, 0]}>
                <boxGeometry args={[0.6, 0.25, 0.4]} />
                <meshStandardMaterial color="#8B4513" roughness={0.9} />
              </mesh>
            ))}
          </group>
        ))}
      </group>

      {/* Construction tools */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.3}>
        <mesh position={[-6, -0.5, 2]} rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[0.3, 2, 0.3]} />
          <meshStandardMaterial color="#808080" metalness={0.8} />
        </mesh>
      </Float>

      {/* Safety cones */}
      {[
        [-4, -1.7, 6],
        [-2, -1.7, 6],
        [4, -1.7, 6],
        [6, -1.7, 6]
      ].map((pos, i) => (
        <mesh key={`cone-${i}`} position={pos as [number, number, number]}>
          <coneGeometry args={[0.3, 0.6, 32]} />
          <meshStandardMaterial color="#FF6B00" roughness={0.5} />
        </mesh>
      ))}

      {/* Construction lights */}
      {[[-5, 3, 5], [5, 3, 5], [0, 3, -8]].map((pos, i) => (
        <group key={`light-${i}`} position={pos as [number, number, number]}>
          <mesh>
            <sphereGeometry args={[0.4]} />
            <meshStandardMaterial 
              color="#FFFF00" 
              emissive="#FFFF00" 
              emissiveIntensity={1.5}
            />
          </mesh>
          <pointLight position={[0, 0, 0]} intensity={3} color="#FFFF00" distance={12} />
        </group>
      ))}

      {/* Floating blueprint/plans */}
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.4}>
        <mesh position={[5, 1, -3]} rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[2, 0.05, 1.5]} />
          <meshStandardMaterial color="#E0F7FF" roughness={0.5} />
        </mesh>
      </Float>

      {/* Scaffolding */}
      {[-4, 4].map((x, i) => (
        <group key={`scaffold-${i}`} position={[x, 0, -6]}>
          {/* Vertical poles */}
          {[[0, 0], [1.5, 0]].map((offset, j) => (
            <mesh key={`pole-${j}`} position={[offset[0], 1, offset[1]]}>
              <cylinderGeometry args={[0.08, 0.08, 4]} />
              <meshStandardMaterial color="#808080" metalness={0.9} />
            </mesh>
          ))}
          {/* Horizontal bars */}
          <mesh position={[0.75, 2, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.05, 0.05, 1.7]} />
            <meshStandardMaterial color="#808080" metalness={0.9} />
          </mesh>
        </group>
      ))}

      {/* Progress indicators - floating percentage */}
      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, 5, 0]}>
          <ringGeometry args={[0.8, 1, 32]} />
          <meshStandardMaterial 
            color="#10B981" 
            emissive="#10B981" 
            emissiveIntensity={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>
      </Float>
    </group>
  );
};

// House completion stages
const HouseStage = ({ stage }: { stage: number }) => {
  return (
    <group>
      {/* Base foundation (always visible) */}
      <mesh position={[0, -1.5, 0]}>
        <boxGeometry args={[6, 0.5, 8]} />
        <meshStandardMaterial color="#4A4A4A" roughness={0.8} />
      </mesh>

      {stage >= 1 && (
        <>
          {/* Walls */}
          <mesh position={[-2.75, 0.75, 0]}>
            <boxGeometry args={[0.5, 3, 8]} />
            <meshStandardMaterial color="#D2B48C" />
          </mesh>
          <mesh position={[2.75, 0.75, 0]}>
            <boxGeometry args={[0.5, 3, 8]} />
            <meshStandardMaterial color="#D2B48C" />
          </mesh>
          <mesh position={[0, 0.75, -3.75]}>
            <boxGeometry args={[6, 3, 0.5]} />
            <meshStandardMaterial color="#D2B48C" />
          </mesh>
          <mesh position={[0, 0.75, 3.75]}>
            <boxGeometry args={[6, 3, 0.5]} />
            <meshStandardMaterial color="#D2B48C" />
          </mesh>
        </>
      )}

      {stage >= 2 && (
        <>
          {/* Roof */}
          <mesh position={[0, 3, 0]} rotation={[0, Math.PI / 2, 0]}>
            <coneGeometry args={[5, 2, 4]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
        </>
      )}

      {stage >= 3 && (
        <>
          {/* Door */}
          <mesh position={[0, -0.3, 4.01]}>
            <boxGeometry args={[1, 2, 0.1]} />
            <meshStandardMaterial color="#654321" />
          </mesh>
          
          {/* Windows */}
          {[[-1.5, 0.5], [1.5, 0.5]].map((pos, i) => (
            <mesh key={i} position={[pos[0], pos[1], 4.01]}>
              <boxGeometry args={[0.8, 1, 0.1]} />
              <meshStandardMaterial 
                color="#87CEEB" 
                emissive="#87CEEB" 
                emissiveIntensity={0.3}
                transparent
                opacity={0.8}
              />
            </mesh>
          ))}
        </>
      )}
    </group>
  );
};

const ConstructionLoans = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const section1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const section1Scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  
  const section2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.6, 0.7], [0, 1, 1, 0]);
  const section2Scale = useTransform(scrollYProgress, [0.3, 0.4, 0.7], [0.8, 1, 0.8]);
  
  const section3Opacity = useTransform(scrollYProgress, [0.65, 0.75, 1], [0, 1, 1]);
  const section3Scale = useTransform(scrollYProgress, [0.7, 0.8], [0.8, 1]);

  // Building progress
  const buildingStage = useTransform(scrollYProgress, [0.3, 0.45, 0.6], [0, 1.5, 3]);

  const benefits = [
    "Competitive interest rates",
    "Flexible draw schedules",
    "Expert construction guidance",
    "Fast approval process",
    "One-time close convenience",
    "No prepayment penalties"
  ];

  return (
    <div ref={containerRef} className="relative" style={{ height: '350vh' }}>
      {/* Section 1: Hero with Construction Site */}
      <motion.section 
        style={{ opacity: section1Opacity, scale: section1Scale }}
        className="h-screen flex items-center justify-center sticky top-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600">
          <Suspense fallback={<div className="w-full h-full bg-orange-600" />}>
            <Canvas shadows>
              <PerspectiveCamera makeDefault position={[8, 5, 12]} />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
              <directionalLight position={[-10, 5, -5]} intensity={0.5} />
              <Environment preset="sunset" />
              <ConstructionSite />
            </Canvas>
          </Suspense>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Building2 className="w-20 h-20 text-white drop-shadow-2xl mx-auto mb-6" />
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-white drop-shadow-2xl">
              Build Your <span className="text-yellow-300">Dream Home</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              From blueprint to reality. Watch your vision come to life with construction lending that builds with you every step of the way.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gap-2 text-lg px-8 py-6 bg-white text-orange-600 hover:bg-gray-100 shadow-2xl">
                Start Your Build
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Section 2: Building Progress Animation */}
      <motion.section 
        style={{ opacity: section2Opacity, scale: section2Scale }}
        className="h-screen flex items-center justify-center sticky top-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900">
          <Suspense fallback={<div className="w-full h-full bg-blue-900" />}>
            <Canvas shadows>
              <PerspectiveCamera makeDefault position={[10, 4, 10]} />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
              <ambientLight intensity={0.6} />
              <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
              <Environment preset="night" />
              
              <group>
                <HouseStage stage={Math.round(buildingStage.get())} />
              </group>
            </Canvas>
          </Suspense>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-black/50 backdrop-blur-xl p-12 rounded-3xl border border-white/20"
          >
            <HardHat className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-5xl font-display font-bold mb-6 text-white text-center">
              Building <span className="text-yellow-400">Process</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 text-center">
              A streamlined journey from planning to completion
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: HardHat, title: "Plan", desc: "Design your dream home", step: 1 },
                { icon: Building2, title: "Approve", desc: "Fast loan approval", step: 2 },
                { icon: Hammer, title: "Build", desc: "Watch it come to life", step: 3 },
                { icon: Home, title: "Move In", desc: "Celebrate your new home", step: 4 }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-4 border-2 border-yellow-400">
                    <item.icon className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div className="text-sm font-semibold text-yellow-400 mb-2">Step {item.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Section 3: Benefits & CTA */}
      <motion.section 
        style={{ opacity: section3Opacity, scale: section3Scale }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 py-24"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
                Why Choose Our Construction Loans?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                We make the complex simple with dedicated support and industry-leading terms.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
                  >
                    <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-white font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <Link to="/contact">
                <Button size="lg" className="gap-2 text-lg px-10 py-7 bg-white text-emerald-600 hover:bg-gray-100 shadow-2xl">
                  Start Building Today
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/30 shadow-2xl p-12 flex flex-col justify-center">
                <div className="text-white">
                  <div className="text-7xl font-bold mb-4">3.5%</div>
                  <div className="text-3xl mb-3">Starting APR</div>
                  <div className="text-lg opacity-90 mb-8">As low as with qualified credit</div>
                  
                  <div className="pt-8 border-t border-white/30">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-4xl font-bold mb-2">0%</div>
                        <div className="text-sm opacity-80">Down Payment Options</div>
                      </div>
                      <div>
                        <div className="text-4xl font-bold mb-2">30</div>
                        <div className="text-sm opacity-80">Day Approval</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ConstructionLoans;
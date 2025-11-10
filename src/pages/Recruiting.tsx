import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Award, Heart, GraduationCap, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, Suspense } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, useGLTF, Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

// 3D Classroom Environment
const Classroom = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#8B7355" roughness={0.8} />
      </mesh>

      {/* Walls */}
      <mesh position={[0, 0, -8]} receiveShadow>
        <boxGeometry args={[20, 8, 0.5]} />
        <meshStandardMaterial color="#E8DDD5" />
      </mesh>

      {/* Whiteboard */}
      <mesh position={[0, 1, -7.7]}>
        <boxGeometry args={[8, 3, 0.1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Whiteboard frame */}
      <mesh position={[0, 1, -7.65]}>
        <boxGeometry args={[8.2, 3.2, 0.05]} />
        <meshStandardMaterial color="#2C3E50" metalness={0.8} />
      </mesh>

      {/* Desks - Front Row */}
      {[-4, -1.5, 1, 3.5].map((x, i) => (
        <group key={`desk-front-${i}`} position={[x, -1.5, -2]}>
          <mesh>
            <boxGeometry args={[1.2, 0.1, 0.8]} />
            <meshStandardMaterial color="#6B5D52" />
          </mesh>
          <mesh position={[-0.5, -0.4, 0.3]}>
            <cylinderGeometry args={[0.05, 0.05, 0.8]} />
            <meshStandardMaterial color="#4A4A4A" metalness={0.7} />
          </mesh>
          <mesh position={[0.5, -0.4, 0.3]}>
            <cylinderGeometry args={[0.05, 0.05, 0.8]} />
            <meshStandardMaterial color="#4A4A4A" metalness={0.7} />
          </mesh>
        </group>
      ))}

      {/* Desks - Back Row */}
      {[-4, -1.5, 1, 3.5].map((x, i) => (
        <group key={`desk-back-${i}`} position={[x, -1.5, 1]}>
          <mesh>
            <boxGeometry args={[1.2, 0.1, 0.8]} />
            <meshStandardMaterial color="#6B5D52" />
          </mesh>
          <mesh position={[-0.5, -0.4, 0.3]}>
            <cylinderGeometry args={[0.05, 0.05, 0.8]} />
            <meshStandardMaterial color="#4A4A4A" metalness={0.7} />
          </mesh>
          <mesh position={[0.5, -0.4, 0.3]}>
            <cylinderGeometry args={[0.05, 0.05, 0.8]} />
            <meshStandardMaterial color="#4A4A4A" metalness={0.7} />
          </mesh>
        </group>
      ))}

      {/* Books on desks */}
      {[-4, -1.5, 1, 3.5].map((x, i) => (
        <Float key={`book-${i}`} speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
          <mesh position={[x, -1.3, -2]}>
            <boxGeometry args={[0.3, 0.05, 0.4]} />
            <meshStandardMaterial color="#3B82F6" />
          </mesh>
        </Float>
      ))}

      {/* Overhead Lights */}
      {[-3, 0, 3].map((x, i) => (
        <group key={`light-${i}`} position={[x, 3, -3]}>
          <mesh>
            <cylinderGeometry args={[0.3, 0.4, 0.2, 32]} />
            <meshStandardMaterial color="#F5F5F5" emissive="#FFF8DC" emissiveIntensity={0.8} />
          </mesh>
          <pointLight position={[0, -0.5, 0]} intensity={2} color="#FFF8DC" distance={6} />
        </group>
      ))}

      {/* Floating Knowledge Icons */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
        <mesh position={[-5, 1, -4]}>
          <octahedronGeometry args={[0.3]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.5} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={1} floatIntensity={0.5}>
        <mesh position={[5, 1.5, -3]}>
          <octahedronGeometry args={[0.25]} />
          <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.5} />
        </mesh>
      </Float>
      <Float speed={1.3} rotationIntensity={1} floatIntensity={0.5}>
        <mesh position={[0, 2.5, -2]}>
          <octahedronGeometry args={[0.2]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.5} />
        </mesh>
      </Float>
    </group>
  );
};

// 3D Support Office Environment
const SupportOffice = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[25, 25]} />
        <meshStandardMaterial color="#4A5568" roughness={0.3} metalness={0.5} />
      </mesh>

      {/* Reception Desk */}
      <group position={[0, -1, -5]}>
        <mesh>
          <boxGeometry args={[6, 1.2, 1.5]} />
          <meshStandardMaterial color="#2C3E50" roughness={0.4} metalness={0.6} />
        </mesh>
        <mesh position={[0, 0.7, 0]}>
          <boxGeometry args={[5.8, 0.1, 1.4]} />
          <meshStandardMaterial color="#34495E" />
        </mesh>
      </group>

      {/* Computer monitors on desk */}
      {[-1.5, 1.5].map((x, i) => (
        <group key={`monitor-${i}`} position={[x, -0.3, -5]}>
          <mesh>
            <boxGeometry args={[1, 0.7, 0.05]} />
            <meshStandardMaterial color="#1a1a1a" emissive="#3B82F6" emissiveIntensity={0.3} />
          </mesh>
          <mesh position={[0, -0.5, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 0.3]} />
            <meshStandardMaterial color="#2C3E50" metalness={0.8} />
          </mesh>
        </group>
      ))}

      {/* Office Chairs */}
      {[-2, 2].map((x, i) => (
        <group key={`chair-${i}`} position={[x, -1.3, -3.5]}>
          {/* Seat */}
          <mesh>
            <cylinderGeometry args={[0.4, 0.4, 0.1, 32]} />
            <meshStandardMaterial color="#1E40AF" />
          </mesh>
          {/* Backrest */}
          <mesh position={[0, 0.5, -0.2]}>
            <boxGeometry args={[0.7, 0.8, 0.1]} />
            <meshStandardMaterial color="#1E40AF" />
          </mesh>
          {/* Base */}
          <mesh position={[0, -0.5, 0]}>
            <cylinderGeometry args={[0.5, 0.1, 0.8, 5]} />
            <meshStandardMaterial color="#374151" metalness={0.8} />
          </mesh>
        </group>
      ))}

      {/* Wall partitions */}
      {[-6, 6].map((x, i) => (
        <mesh key={`partition-${i}`} position={[x, 0, -2]} rotation={[0, i === 0 ? Math.PI / 6 : -Math.PI / 6, 0]}>
          <boxGeometry args={[3, 4, 0.1]} />
          <meshStandardMaterial color="#E5E7EB" transparent opacity={0.8} />
        </mesh>
      ))}

      {/* Hanging lights */}
      {[-3, 0, 3].map((x, i) => (
        <group key={`hanging-light-${i}`} position={[x, 2.5, -3]}>
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0, 0.4, 1, 32]} />
            <meshStandardMaterial color="#F3F4F6" emissive="#FBBF24" emissiveIntensity={1} />
          </mesh>
          <pointLight position={[0, 0, 0]} intensity={3} color="#FBBF24" distance={8} />
        </group>
      ))}

      {/* Floating help icons */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-4, 1, -2]}>
          <torusGeometry args={[0.3, 0.1, 16, 32]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.7} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[4, 1.5, -2.5]}>
          <torusGeometry args={[0.25, 0.08, 16, 32]} />
          <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.7} />
        </mesh>
      </Float>

      {/* Info boards on walls */}
      {[-5, 5].map((x, i) => (
        <mesh key={`board-${i}`} position={[x, 1, -7.5]}>
          <boxGeometry args={[2, 2.5, 0.1]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
  );
};

// 3D Money Vault / Compensation Room
const CompensationVault = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Luxurious floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial 
          color="#1a0f0a" 
          roughness={0.2} 
          metalness={0.8}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Central podium */}
      <group position={[0, -1, 0]}>
        <mesh>
          <cylinderGeometry args={[2, 2.5, 0.5, 32]} />
          <meshStandardMaterial 
            color="#D4AF37" 
            metalness={0.9} 
            roughness={0.1}
            emissive="#D4AF37"
            emissiveIntensity={0.3}
          />
        </mesh>
        {/* Rotating money symbol */}
        <Float speed={2} rotationIntensity={2} floatIntensity={0.5}>
          <mesh position={[0, 1.5, 0]}>
            <torusGeometry args={[0.8, 0.2, 16, 32]} />
            <meshStandardMaterial 
              color="#10B981" 
              metalness={1} 
              roughness={0}
              emissive="#10B981"
              emissiveIntensity={0.8}
            />
          </mesh>
        </Float>
      </group>

      {/* Money stacks around the room */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * 5;
        const z = Math.sin(rad) * 5;
        return (
          <Float key={`money-${i}`} speed={1 + i * 0.2} rotationIntensity={0.5} floatIntensity={0.3}>
            <group position={[x, -1, z]}>
              {[0, 0.15, 0.3].map((y, j) => (
                <mesh key={j} position={[0, y, 0]}>
                  <boxGeometry args={[0.8, 0.1, 0.4]} />
                  <meshStandardMaterial 
                    color="#10B981" 
                    metalness={0.5} 
                    roughness={0.3}
                    emissive="#10B981"
                    emissiveIntensity={0.2}
                  />
                </mesh>
              ))}
            </group>
          </Float>
        );
      })}

      {/* Pillars */}
      {[0, 90, 180, 270].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * 8;
        const z = Math.sin(rad) * 8;
        return (
          <mesh key={`pillar-${i}`} position={[x, 1, z]}>
            <cylinderGeometry args={[0.4, 0.5, 6, 32]} />
            <meshStandardMaterial 
              color="#C0C0C0" 
              metalness={0.9} 
              roughness={0.1}
            />
          </mesh>
        );
      })}

      {/* Ceiling lights */}
      {[0, 120, 240].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * 4;
        const z = Math.sin(rad) * 4;
        return (
          <group key={`ceiling-light-${i}`} position={[x, 4, z]}>
            <mesh>
              <sphereGeometry args={[0.5, 32, 32]} />
              <meshStandardMaterial 
                color="#FBBF24" 
                emissive="#FBBF24" 
                emissiveIntensity={2}
              />
            </mesh>
            <pointLight position={[0, 0, 0]} intensity={5} color="#FBBF24" distance={15} />
          </group>
        );
      })}

      {/* Floating coins */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const radius = 3 + Math.random() * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.random() * 3 - 1;
        return (
          <Float key={`coin-${i}`} speed={1 + Math.random()} rotationIntensity={2} floatIntensity={0.5}>
            <mesh position={[x, y, z]} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
              <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
              <meshStandardMaterial 
                color="#D4AF37" 
                metalness={1} 
                roughness={0}
                emissive="#D4AF37"
                emissiveIntensity={0.5}
              />
            </mesh>
          </Float>
        );
      })}

      {/* Growth chart visualization */}
      <group position={[-6, 0, -6]} rotation={[0, Math.PI / 4, 0]}>
        {[1, 1.5, 2.5, 3.5, 4.5].map((height, i) => (
          <mesh key={`bar-${i}`} position={[i * 0.8, -2 + height / 2, 0]}>
            <boxGeometry args={[0.6, height, 0.6]} />
            <meshStandardMaterial 
              color="#3B82F6" 
              metalness={0.6} 
              roughness={0.3}
              emissive="#3B82F6"
              emissiveIntensity={0.3}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
};

const Recruiting = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Section opacities and scales
  const section1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const section1Scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.8]);
  
  const section2Opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const section2Scale = useTransform(scrollYProgress, [0.25, 0.35, 0.55], [0.8, 1, 0.8]);
  
  const section3Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  const section3Scale = useTransform(scrollYProgress, [0.55, 0.65, 0.85], [0.8, 1, 0.8]);
  
  const section4Opacity = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);
  const section4Scale = useTransform(scrollYProgress, [0.85, 0.95], [0.8, 1]);

  return (
    <div ref={containerRef} className="relative" style={{ height: '400vh' }}>
      {/* Section 1: Hero with 3D Intro */}
      <motion.section 
        style={{ opacity: section1Opacity, scale: section1Scale }}
        className="h-screen flex items-center justify-center sticky top-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-accent">
          <Canvas shadows>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ffd700" />
            <Environment preset="sunset" />
            
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
              <group>
                <mesh>
                  <sphereGeometry args={[1.5, 32, 32]} />
                  <meshStandardMaterial 
                    color="#3B82F6" 
                    metalness={0.8} 
                    roughness={0.2}
                    emissive="#3B82F6"
                    emissiveIntensity={0.3}
                  />
                </mesh>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  return (
                    <mesh 
                      key={i} 
                      position={[Math.cos(rad) * 2.5, Math.sin(rad) * 2.5, 0]}
                    >
                      <boxGeometry args={[0.3, 0.3, 0.3]} />
                      <meshStandardMaterial 
                        color="#10B981" 
                        metalness={0.9} 
                        roughness={0.1}
                        emissive="#10B981"
                        emissiveIntensity={0.5}
                      />
                    </mesh>
                  );
                })}
              </group>
            </Float>
          </Canvas>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Users className="w-20 h-20 text-white mx-auto mb-6" />
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-white drop-shadow-2xl">
              Join Our <span className="text-secondary">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              Build a career that makes a difference. Scroll to explore your journey.
            </p>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Section 2: Training Classroom */}
      <motion.section 
        style={{ opacity: section2Opacity, scale: section2Scale }}
        className="h-screen flex items-center justify-center sticky top-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600">
          <Suspense fallback={<div className="w-full h-full bg-slate-800" />}>
            <Canvas shadows>
              <PerspectiveCamera makeDefault position={[0, 2, 10]} />
              <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 4} />
              <ambientLight intensity={0.3} />
              <directionalLight position={[10, 10, 5]} intensity={0.8} castShadow />
              <directionalLight position={[-10, 5, -5]} intensity={0.4} />
              <Environment preset="city" />
              <Classroom />
            </Canvas>
          </Suspense>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-black/40 backdrop-blur-xl p-12 rounded-3xl border border-white/20"
          >
            <GraduationCap className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-5xl font-display font-bold mb-6 text-white text-center">
              World-Class <span className="text-yellow-400">Training</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 text-center">
              Step into our virtual classroom. We invest in your growth with comprehensive training programs, mentorship, and continuous learning opportunities.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: GraduationCap, title: "Expert Training", desc: "Learn from the best" },
                { icon: TrendingUp, title: "Career Growth", desc: "Unlimited advancement" },
                { icon: Award, title: "Certifications", desc: "Industry recognized" }
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <item.icon className="w-10 h-10 text-yellow-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Section 3: Support Office */}
      <motion.section 
        style={{ opacity: section3Opacity, scale: section3Scale }}
        className="h-screen flex items-center justify-center sticky top-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600">
          <Suspense fallback={<div className="w-full h-full bg-gray-800" />}>
            <Canvas shadows>
              <PerspectiveCamera makeDefault position={[0, 2, 12]} />
              <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 4} />
              <ambientLight intensity={0.4} />
              <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
              <directionalLight position={[-10, 5, -5]} intensity={0.5} />
              <Environment preset="apartment" />
              <SupportOffice />
            </Canvas>
          </Suspense>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-black/40 backdrop-blur-xl p-12 rounded-3xl border border-white/20"
          >
            <Heart className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-5xl font-display font-bold mb-6 text-white text-center">
              Support That <span className="text-red-400">Cares</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 text-center">
              Enter our support hub. You're never alone on your journey. Our dedicated team is here 24/7 to help you succeed.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "24/7 Support", desc: "Always here when you need us", icon: "💬" },
                { title: "Mentorship", desc: "Guidance from experienced pros", icon: "🎯" },
                { title: "Team Culture", desc: "Collaborative environment", icon: "🤝" },
                { title: "Work-Life Balance", desc: "Flexible schedules", icon: "⚖️" }
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Section 4: Compensation Vault */}
      <motion.section 
        style={{ opacity: section4Opacity, scale: section4Scale }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900 py-24"
      >
        <div className="absolute inset-0">
          <Suspense fallback={<div className="w-full h-full bg-amber-900" />}>
          <Canvas shadows>
              <PerspectiveCamera makeDefault position={[0, 3, 15]} />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
              <pointLight position={[0, 5, 0]} intensity={2} color="#FBBF24" />
              <Environment preset="sunset" />
              <CompensationVault />
            </Canvas>
          </Suspense>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-black/50 backdrop-blur-xl p-12 rounded-3xl border border-yellow-500/30"
          >
            <DollarSign className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-6xl font-display font-bold mb-6 text-white text-center">
              Limitless <span className="text-yellow-400">Earnings</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 text-center max-w-3xl mx-auto">
              Step into the vault of opportunity. Your earning potential has no ceiling here.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { level: "Starter", range: "$60K - $80K", commission: "2.5%", color: "from-blue-500 to-blue-600" },
                { level: "Professional", range: "$80K - $120K", commission: "3.5%", color: "from-purple-500 to-purple-600" },
                { level: "Elite", range: "$120K - $200K+", commission: "5%", color: "from-yellow-500 to-orange-500" }
              ].map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-gradient-to-br ${tier.color} p-8 rounded-2xl shadow-2xl border-2 border-white/20 transform hover:scale-105 transition-transform`}
                >
                  <h3 className="text-3xl font-bold text-white mb-4">{tier.level}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{tier.range}</div>
                  <div className="text-white/90 mb-4">Annual Earnings</div>
                  <div className="pt-4 border-t border-white/30">
                    <div className="text-sm text-white/80 mb-1">Commission</div>
                    <div className="text-2xl font-bold text-white">{tier.commission}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="gap-2 text-lg px-12 py-8 bg-yellow-500 hover:bg-yellow-400 text-black font-bold shadow-2xl">
                  Start Your Journey
                  <ArrowRight className="w-6 h-6" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Recruiting;
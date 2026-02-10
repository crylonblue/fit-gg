'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'

// Simple 3D avatar representations for different levels
function AvatarLevel({ level, isActive }: { level: number; isActive: boolean }) {
  const getAvatarProps = (level: number) => {
    switch (level) {
      case 1:
        return {
          bodyColor: '#8B5CF6',
          size: 0.8,
          metalness: 0.3,
          emissiveIntensity: 0,
          armor: false
        }
      case 50:
        return {
          bodyColor: '#7C3AED',
          size: 1.0,
          metalness: 0.6,
          emissiveIntensity: 0.1,
          armor: true
        }
      case 100:
        return {
          bodyColor: '#6D28D9',
          size: 1.2,
          metalness: 0.9,
          emissiveIntensity: 0.3,
          armor: true,
          legendary: true
        }
      default:
        return {
          bodyColor: '#8B5CF6',
          size: 0.8,
          metalness: 0.3,
          emissiveIntensity: 0,
          armor: false
        }
    }
  }

  const props = getAvatarProps(level)

  return (
    <Float speed={isActive ? 2 : 1} rotationIntensity={isActive ? 0.2 : 0.1}>
      <group scale={props.size}>
        {/* Body */}
        <mesh>
          <boxGeometry args={[0.5, 1, 0.25]} />
          <meshStandardMaterial 
            color={props.bodyColor}
            metalness={props.metalness}
            roughness={0.3}
            emissive={props.bodyColor}
            emissiveIntensity={props.emissiveIntensity}
          />
        </mesh>
        
        {/* Head */}
        <mesh position={[0, 0.7, 0]}>
          <sphereGeometry args={[0.3]} />
          <meshStandardMaterial 
            color={props.bodyColor}
            metalness={props.metalness}
            roughness={0.2}
            emissive={props.bodyColor}
            emissiveIntensity={props.emissiveIntensity}
          />
        </mesh>
        
        {/* Armor pieces for higher levels */}
        {props.armor && (
          <>
            {/* Shoulder pads */}
            <mesh position={[-0.4, 0.3, 0]}>
              <sphereGeometry args={[0.15]} />
              <meshStandardMaterial 
                color="#F59E0B"
                metalness={0.8}
                roughness={0.1}
              />
            </mesh>
            <mesh position={[0.4, 0.3, 0]}>
              <sphereGeometry args={[0.15]} />
              <meshStandardMaterial 
                color="#F59E0B"
                metalness={0.8}
                roughness={0.1}
              />
            </mesh>
          </>
        )}
        
        {/* Legendary effects for Level 100 */}
        {props.legendary && (
          <>
            {/* Crown */}
            <mesh position={[0, 1.1, 0]}>
              <coneGeometry args={[0.2, 0.3, 6]} />
              <meshStandardMaterial 
                color="#F59E0B"
                metalness={1}
                roughness={0}
                emissive="#F59E0B"
                emissiveIntensity={0.5}
              />
            </mesh>
            
            {/* Aura rings */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[1, 0.05, 8, 32]} />
              <meshStandardMaterial 
                color="#7C3AED"
                transparent
                opacity={0.6}
                emissive="#7C3AED"
                emissiveIntensity={0.8}
              />
            </mesh>
          </>
        )}
      </group>
    </Float>
  )
}

const evolutionStages = [
  {
    level: 1,
    title: 'Beginner',
    description: 'Starting your journey with basic gear and determination',
    stats: { str: 10, end: 8, flex: 5 }
  },
  {
    level: 50,
    title: 'Warrior',
    description: 'Seasoned fighter with quality equipment and experience',
    stats: { str: 45, end: 40, flex: 35 }
  },
  {
    level: 100,
    title: 'Legend',
    description: 'Mythic hero with legendary gear and inspiring presence',
    stats: { str: 100, end: 95, flex: 80 }
  }
]

export default function AvatarEvolutionSection() {
  const [selectedLevel, setSelectedLevel] = useState(1)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const selectedStage = evolutionStages.find(stage => stage.level === selectedLevel) || evolutionStages[0]

  return (
    <section 
      id="avatar-evolution"
      ref={ref}
      className="relative py-24 px-6 bg-gradient-to-b from-surface/30 to-bg-primary"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">YOUR CHARACTER</span><br />
            <span className="gradient-text">EVOLVES WITH YOU.</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Every pushup. Every mile. Every rep. Your avatar feels it all.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Avatar Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-surface/50 rounded-2xl border border-border overflow-hidden">
              <Canvas
                camera={{ position: [0, 0, 4], fov: 45 }}
              >
                <ambientLight intensity={0.4} />
                <directionalLight 
                  position={[5, 5, 5]} 
                  intensity={1} 
                  color="#7C3AED"
                />
                <pointLight 
                  position={[-3, 3, -3]} 
                  intensity={0.6} 
                  color="#F59E0B"
                />
                
                <AvatarLevel level={selectedLevel} isActive={true} />
                
                <OrbitControls 
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={2}
                />
              </Canvas>
            </div>
            
            {/* Level indicator */}
            <div className="absolute top-4 left-4 bg-bg-primary/90 backdrop-blur-sm border border-border rounded-lg px-4 py-2">
              <span className="font-mono text-primary font-bold">
                Level {selectedLevel}
              </span>
            </div>
          </motion.div>

          {/* Evolution Controls & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Level selector */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Evolution Stages</h3>
              
              <div className="space-y-4">
                {evolutionStages.map((stage) => (
                  <button
                    key={stage.level}
                    onClick={() => setSelectedLevel(stage.level)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedLevel === stage.level
                        ? 'border-primary bg-primary/10 glow'
                        : 'border-border bg-surface/50 hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono font-bold text-primary">
                        Level {stage.level}
                      </span>
                      <span className="text-sm font-semibold text-text-secondary">
                        {stage.title}
                      </span>
                    </div>
                    <p className="text-sm text-text-muted">
                      {stage.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Current stats */}
            <div className="card p-6">
              <h4 className="font-bold text-white mb-4">Character Stats</h4>
              
              <div className="space-y-3">
                {Object.entries(selectedStage.stats).map(([stat, value]) => (
                  <div key={stat} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary uppercase font-mono">
                        {stat === 'str' ? 'Strength' : stat === 'end' ? 'Endurance' : 'Flexibility'}
                      </span>
                      <span className="text-primary font-bold font-mono">
                        {value}
                      </span>
                    </div>
                    <div className="w-full bg-surface-elevated rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: 0 }}
                        animate={{ width: `${value}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action */}
            <button 
              className="btn-primary w-full group"
              onClick={() => {
                document.getElementById('class-selection')?.scrollIntoView({ 
                  behavior: 'smooth' 
                })
              }}
            >
              <span>Choose Your Path</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
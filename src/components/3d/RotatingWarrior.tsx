'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Float, Sparkles } from '@react-three/drei'
import { Mesh, Group } from 'three'

// Simple geometric warrior character
function GeometricWarrior() {
  const groupRef = useRef<Group>(null)
  const swordRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle auto-rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
    
    if (swordRef.current) {
      // Slight sword animation
      swordRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.05
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, -0.5, 0]} scale={1.2}>
        {/* Body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.6, 1.2, 0.3]} />
          <meshStandardMaterial 
            color="#7C3AED" 
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
        
        {/* Head */}
        <mesh position={[0, 0.9, 0]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial 
            color="#6D28D9" 
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        
        {/* Helmet/Crown spikes */}
        <mesh position={[-0.15, 1.2, 0]}>
          <coneGeometry args={[0.08, 0.3, 4]} />
          <meshStandardMaterial 
            color="#F59E0B" 
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        <mesh position={[0.15, 1.2, 0]}>
          <coneGeometry args={[0.08, 0.3, 4]} />
          <meshStandardMaterial 
            color="#F59E0B" 
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        
        {/* Arms */}
        <mesh position={[-0.5, 0.2, 0]} rotation={[0, 0, -0.3]}>
          <boxGeometry args={[0.2, 0.8, 0.2]} />
          <meshStandardMaterial 
            color="#8B5CF6" 
            metalness={0.5}
            roughness={0.4}
          />
        </mesh>
        <mesh position={[0.5, 0.2, 0]} rotation={[0, 0, 0.3]}>
          <boxGeometry args={[0.2, 0.8, 0.2]} />
          <meshStandardMaterial 
            color="#8B5CF6" 
            metalness={0.5}
            roughness={0.4}
          />
        </mesh>
        
        {/* Legs */}
        <mesh position={[-0.2, -1.2, 0]}>
          <boxGeometry args={[0.25, 0.8, 0.25]} />
          <meshStandardMaterial 
            color="#5B21B6" 
            metalness={0.4}
            roughness={0.5}
          />
        </mesh>
        <mesh position={[0.2, -1.2, 0]}>
          <boxGeometry args={[0.25, 0.8, 0.25]} />
          <meshStandardMaterial 
            color="#5B21B6" 
            metalness={0.4}
            roughness={0.5}
          />
        </mesh>
        
        {/* Sword */}
        <group ref={swordRef} position={[-0.7, 0.2, 0]} rotation={[0, 0, -0.5]}>
          {/* Handle */}
          <mesh position={[0, -0.3, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 0.4]} />
            <meshStandardMaterial 
              color="#92400E" 
              metalness={0.3}
              roughness={0.7}
            />
          </mesh>
          
          {/* Blade */}
          <mesh position={[0, 0.3, 0]}>
            <boxGeometry args={[0.02, 0.8, 0.08]} />
            <meshStandardMaterial 
              color="#E5E7EB" 
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
          
          {/* Glow effect on blade */}
          <mesh position={[0, 0.3, 0]}>
            <boxGeometry args={[0.03, 0.85, 0.1]} />
            <meshStandardMaterial 
              color="#7C3AED" 
              metalness={0.9}
              roughness={0.1}
              emissive="#7C3AED"
              emissiveIntensity={0.2}
              transparent
              opacity={0.6}
            />
          </mesh>
        </group>
        
        {/* Shield */}
        <mesh position={[0.7, 0, 0]} rotation={[0, 0, 0.2]}>
          <cylinderGeometry args={[0.35, 0.35, 0.1, 6]} />
          <meshStandardMaterial 
            color="#10B981" 
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
        
        {/* Shield emblem */}
        <mesh position={[0.72, 0, 0]} rotation={[0, 0, 0.2]}>
          <cylinderGeometry args={[0.15, 0.15, 0.11, 6]} />
          <meshStandardMaterial 
            color="#F59E0B" 
            metalness={0.8}
            roughness={0.2}
            emissive="#F59E0B"
            emissiveIntensity={0.1}
          />
        </mesh>
      </group>
      
      {/* Sparkles around character */}
      <Sparkles 
        count={20} 
        scale={3} 
        size={3} 
        speed={0.5} 
        opacity={0.6}
        color="#7C3AED"
      />
    </Float>
  )
}

// Lighting setup
function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={1.5} 
        color="#F1F5F9"
        castShadow
      />
      <pointLight 
        position={[-5, 3, -5]} 
        intensity={0.8} 
        color="#7C3AED"
      />
      <pointLight 
        position={[5, -3, 5]} 
        intensity={0.6} 
        color="#10B981"
      />
    </>
  )
}

export default function RotatingWarrior() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="w-full h-full relative">
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-text-muted loading-3d">
            Loading warrior...
          </div>
        </div>
      )}
      
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        onCreated={() => setIsLoading(false)}
        shadows
      >
        <Lights />
        <GeometricWarrior />
        
        {/* Interactive controls */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  )
}
'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function FloatingParticles() {
  const ref = useRef<THREE.Points>(null)
  
  // Generate random particle positions
  const particlesCount = 200
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)
    
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 20     // x
      positions[i3 + 1] = (Math.random() - 0.5) * 20 // y  
      positions[i3 + 2] = (Math.random() - 0.5) * 20 // z
    }
    
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      // Gentle floating animation
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.05
      
      // Update particle positions for floating effect
      const positions = ref.current.geometry.attributes.position.array as Float32Array
      
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3
        
        // Gentle vertical floating
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime * 0.5 + i * 0.1) * 0.0005
        
        // Subtle horizontal drift
        positions[i3] += Math.sin(state.clock.elapsedTime * 0.3 + i * 0.2) * 0.0002
        positions[i3 + 2] += Math.cos(state.clock.elapsedTime * 0.4 + i * 0.3) * 0.0002
        
        // Wrap particles that drift too far
        if (positions[i3] > 10) positions[i3] = -10
        if (positions[i3] < -10) positions[i3] = 10
        if (positions[i3 + 1] > 10) positions[i3 + 1] = -10
        if (positions[i3 + 1] < -10) positions[i3 + 1] = 10
        if (positions[i3 + 2] > 10) positions[i3 + 2] = -10
        if (positions[i3 + 2] < -10) positions[i3 + 2] = 10
      }
      
      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#7C3AED"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

// Ambient magical sparkles
function MagicalSparkles() {
  const ref = useRef<THREE.Points>(null)
  
  const sparklesCount = 50
  const positions = useMemo(() => {
    const positions = new Float32Array(sparklesCount * 3)
    
    for (let i = 0; i < sparklesCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 30     // x
      positions[i3 + 1] = (Math.random() - 0.5) * 30 // y  
      positions[i3 + 2] = (Math.random() - 0.5) * 30 // z
    }
    
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      // Sparkle twinkling effect
      const material = ref.current.material as THREE.PointsMaterial
      material.opacity = 0.1 + Math.sin(state.clock.elapsedTime * 2) * 0.05
      
      // Slow rotation
      ref.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#F59E0B"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.1}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function BackgroundLighting() {
  return (
    <>
      <ambientLight intensity={0.1} color="#0A0A0F" />
      <directionalLight 
        position={[0, 10, 5]} 
        intensity={0.3} 
        color="#7C3AED" 
      />
    </>
  )
}

export default function ParticleField() {
  return (
    <div className="w-full h-full opacity-40">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <BackgroundLighting />
        <FloatingParticles />
        <MagicalSparkles />
      </Canvas>
    </div>
  )
}
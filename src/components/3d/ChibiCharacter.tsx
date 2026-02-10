'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { Group } from 'three'
import { Suspense } from 'react'

interface CharacterProps {
  bodyColor: string
  accentColor: string
  weaponType?: 'sword' | 'staff' | 'bow' | 'shield'
  autoRotate?: boolean
  scale?: number
}

function ChibiBody({ bodyColor, accentColor, weaponType = 'sword', scale = 1 }: CharacterProps) {
  const groupRef = useRef<Group>(null)
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle idle bounce
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05
    }
  })

  return (
    <group ref={groupRef} scale={scale}>
      {/* === BIG HEAD (chibi proportions: head = 40% of total height) === */}
      <group position={[0, 1.1, 0]}>
        {/* Main head sphere */}
        <mesh>
          <sphereGeometry args={[0.55, 32, 32]} />
          <meshStandardMaterial color="#FFD5B8" roughness={0.8} metalness={0.05} />
        </mesh>
        
        {/* Eyes - big and expressive */}
        <mesh position={[-0.18, 0.05, 0.48]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#1a1a2e" roughness={0.3} />
        </mesh>
        <mesh position={[0.18, 0.05, 0.48]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#1a1a2e" roughness={0.3} />
        </mesh>
        
        {/* Eye highlights */}
        <mesh position={[-0.15, 0.09, 0.56]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0.21, 0.09, 0.56]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.5} />
        </mesh>
        
        {/* Mouth - small smile */}
        <mesh position={[0, -0.12, 0.5]} rotation={[0.2, 0, 0]}>
          <torusGeometry args={[0.06, 0.015, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#c44040" />
        </mesh>

        {/* Hair - fluffy on top */}
        <mesh position={[0, 0.25, 0.05]}>
          <sphereGeometry args={[0.52, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
          <meshStandardMaterial color={bodyColor} roughness={0.9} />
        </mesh>
        <mesh position={[0, 0.4, -0.1]}>
          <sphereGeometry args={[0.35, 16, 16]} />
          <meshStandardMaterial color={bodyColor} roughness={0.9} />
        </mesh>
      </group>

      {/* === BODY (small and stubby) === */}
      <group position={[0, 0.2, 0]}>
        {/* Torso */}
        <mesh>
          <capsuleGeometry args={[0.3, 0.3, 8, 16]} />
          <meshStandardMaterial color={bodyColor} roughness={0.6} metalness={0.2} />
        </mesh>
        
        {/* Belt */}
        <mesh position={[0, -0.05, 0]}>
          <torusGeometry args={[0.31, 0.04, 8, 16]} />
          <meshStandardMaterial color={accentColor} metalness={0.6} roughness={0.3} />
        </mesh>
        
        {/* Belt buckle */}
        <mesh position={[0, -0.05, 0.3]}>
          <boxGeometry args={[0.08, 0.08, 0.02]} />
          <meshStandardMaterial color={accentColor} metalness={0.8} roughness={0.1} emissive={accentColor} emissiveIntensity={0.3} />
        </mesh>
      </group>

      {/* === ARMS (short and stubby) === */}
      {/* Left arm */}
      <group position={[-0.4, 0.25, 0]} rotation={[0, 0, -0.3]}>
        <mesh>
          <capsuleGeometry args={[0.1, 0.25, 8, 16]} />
          <meshStandardMaterial color={bodyColor} roughness={0.6} metalness={0.2} />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.25, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#FFD5B8" roughness={0.8} />
        </mesh>
      </group>
      
      {/* Right arm */}
      <group position={[0.4, 0.25, 0]} rotation={[0, 0, 0.3]}>
        <mesh>
          <capsuleGeometry args={[0.1, 0.25, 8, 16]} />
          <meshStandardMaterial color={bodyColor} roughness={0.6} metalness={0.2} />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.25, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#FFD5B8" roughness={0.8} />
        </mesh>
      </group>

      {/* === LEGS (short) === */}
      <mesh position={[-0.15, -0.45, 0]}>
        <capsuleGeometry args={[0.12, 0.2, 8, 16]} />
        <meshStandardMaterial color="#2D2B55" roughness={0.7} />
      </mesh>
      <mesh position={[0.15, -0.45, 0]}>
        <capsuleGeometry args={[0.12, 0.2, 8, 16]} />
        <meshStandardMaterial color="#2D2B55" roughness={0.7} />
      </mesh>
      
      {/* Feet/boots */}
      <mesh position={[-0.15, -0.7, 0.05]}>
        <boxGeometry args={[0.16, 0.1, 0.22]} />
        <meshStandardMaterial color={accentColor} roughness={0.5} metalness={0.3} />
      </mesh>
      <mesh position={[0.15, -0.7, 0.05]}>
        <boxGeometry args={[0.16, 0.1, 0.22]} />
        <meshStandardMaterial color={accentColor} roughness={0.5} metalness={0.3} />
      </mesh>

      {/* === WEAPON === */}
      {weaponType === 'sword' && (
        <group position={[0.55, 0.1, -0.1]} rotation={[0.2, 0, 0.4]}>
          <mesh position={[0, 0.4, 0]}>
            <boxGeometry args={[0.06, 0.7, 0.02]} />
            <meshStandardMaterial color="#C0C0C0" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.2, 0.04, 0.04]} />
            <meshStandardMaterial color={accentColor} metalness={0.6} roughness={0.3} />
          </mesh>
          <mesh position={[0, -0.15, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 0.2]} />
            <meshStandardMaterial color="#5C3A1E" roughness={0.8} />
          </mesh>
        </group>
      )}
      
      {weaponType === 'staff' && (
        <group position={[0.5, 0.3, -0.1]} rotation={[0.1, 0, 0.15]}>
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.025, 0.03, 1.6]} />
            <meshStandardMaterial color="#5C3A1E" roughness={0.8} />
          </mesh>
          <mesh position={[0, 0.85, 0]}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={0.8} transparent opacity={0.9} />
          </mesh>
          <mesh position={[0, 0.85, 0]}>
            <sphereGeometry args={[0.18, 16, 16]} />
            <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={0.3} transparent opacity={0.2} />
          </mesh>
        </group>
      )}
      
      {weaponType === 'bow' && (
        <group position={[-0.55, 0.15, 0.1]} rotation={[0, 0.5, 0]}>
          <mesh rotation={[0, 0, 0]}>
            <torusGeometry args={[0.35, 0.02, 8, 16, Math.PI]} />
            <meshStandardMaterial color="#5C3A1E" roughness={0.7} />
          </mesh>
        </group>
      )}
      
      {weaponType === 'shield' && (
        <group position={[-0.5, 0.15, 0.15]} rotation={[0, 0.3, 0]}>
          <mesh>
            <cylinderGeometry args={[0.3, 0.3, 0.05, 6]} />
            <meshStandardMaterial color={accentColor} metalness={0.7} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0, 0.03]}>
            <cylinderGeometry args={[0.12, 0.12, 0.06, 6]} />
            <meshStandardMaterial color={bodyColor} metalness={0.8} roughness={0.1} />
          </mesh>
        </group>
      )}
    </group>
  )
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} color="#FFF5E6" />
      <pointLight position={[-3, 2, 4]} intensity={0.5} color="#6C5CE7" />
      <pointLight position={[3, -1, -3]} intensity={0.3} color="#4ECDC4" />
      <hemisphereLight intensity={0.3} color="#6C5CE7" groundColor="#FF6B35" />
    </>
  )
}

interface ChibiCharacterProps {
  bodyColor?: string
  accentColor?: string
  weaponType?: 'sword' | 'staff' | 'bow' | 'shield'
  className?: string
  autoRotate?: boolean
  scale?: number
}

export default function ChibiCharacter({ 
  bodyColor = '#6C5CE7', 
  accentColor = '#FFD93D',
  weaponType = 'sword',
  className = '',
  autoRotate = true,
  scale = 1.4
}: ChibiCharacterProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-text-muted text-sm animate-pulse">Loading...</div>
        </div>
      }>
        <Canvas camera={{ position: [0, 0.5, 4], fov: 40 }}>
          <Lights />
          <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
            <ChibiBody 
              bodyColor={bodyColor} 
              accentColor={accentColor} 
              weaponType={weaponType}
              scale={scale}
            />
          </Float>
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={1.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.8}
          />
        </Canvas>
      </Suspense>
    </div>
  )
}

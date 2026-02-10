'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import type { Group } from 'three'
import { Suspense } from 'react'

interface CharacterConfig {
  bodyColor: string
  accentColor: string
  skinColor?: string
  hairColor: string
  eyeColor: string
  weaponType: 'sword' | 'staff' | 'bow' | 'shield'
}

function Eye({ position, eyeColor }: { position: [number, number, number]; eyeColor: string }) {
  return (
    <group position={position}>
      {/* Eye white */}
      <mesh>
        <sphereGeometry args={[0.14, 20, 20]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
      </mesh>
      {/* Iris */}
      <mesh position={[0, 0, 0.08]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color={eyeColor} roughness={0.2} metalness={0.1} />
      </mesh>
      {/* Pupil */}
      <mesh position={[0, 0, 0.12]}>
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.1} />
      </mesh>
      {/* Highlight big */}
      <mesh position={[0.04, 0.04, 0.14]}>
        <sphereGeometry args={[0.035, 8, 8]} />
        <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.8} />
      </mesh>
      {/* Highlight small */}
      <mesh position={[-0.02, -0.02, 0.13]}>
        <sphereGeometry args={[0.018, 8, 8]} />
        <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

function WarriorHair({ color }: { color: string }) {
  return (
    <group>
      {/* Main hair dome */}
      <mesh position={[0, 0.2, -0.05]}>
        <sphereGeometry args={[0.58, 20, 20, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
        <meshStandardMaterial color={color} roughness={0.85} />
      </mesh>
      {/* Spiky tufts */}
      {[[-0.2, 0.55, 0.1], [0.15, 0.6, -0.05], [0, 0.58, 0.15], [-0.1, 0.5, -0.2], [0.2, 0.48, -0.15]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} rotation={[(Math.random() - 0.5) * 0.5, 0, (Math.random() - 0.5) * 0.8]}>
          <coneGeometry args={[0.08, 0.25, 8]} />
          <meshStandardMaterial color={color} roughness={0.85} />
        </mesh>
      ))}
    </group>
  )
}

function MageHair({ color }: { color: string }) {
  return (
    <group>
      {/* Long flowing hair */}
      <mesh position={[0, 0.15, -0.05]}>
        <sphereGeometry args={[0.58, 20, 20, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
        <meshStandardMaterial color={color} roughness={0.8} />
      </mesh>
      {/* Side hair strands */}
      <mesh position={[-0.4, -0.15, -0.1]}>
        <capsuleGeometry args={[0.12, 0.5, 8, 12]} />
        <meshStandardMaterial color={color} roughness={0.8} />
      </mesh>
      <mesh position={[0.4, -0.15, -0.1]}>
        <capsuleGeometry args={[0.12, 0.5, 8, 12]} />
        <meshStandardMaterial color={color} roughness={0.8} />
      </mesh>
      {/* Back hair */}
      <mesh position={[0, -0.2, -0.35]}>
        <capsuleGeometry args={[0.25, 0.6, 8, 12]} />
        <meshStandardMaterial color={color} roughness={0.8} />
      </mesh>
      {/* Wizard hat */}
      <mesh position={[0, 0.65, 0]} rotation={[0.1, 0, 0.05]}>
        <coneGeometry args={[0.35, 0.7, 12]} />
        <meshStandardMaterial color="#2D1B69" roughness={0.6} />
      </mesh>
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.45, 0.45, 0.04, 16]} />
        <meshStandardMaterial color="#2D1B69" roughness={0.6} />
      </mesh>
      {/* Hat star */}
      <mesh position={[0, 0.9, 0.1]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color="#FBBF24" emissive="#FBBF24" emissiveIntensity={1} />
      </mesh>
    </group>
  )
}

function RangerHair({ color }: { color: string }) {
  return (
    <group>
      <mesh position={[0, 0.18, -0.05]}>
        <sphereGeometry args={[0.56, 20, 20, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
        <meshStandardMaterial color={color} roughness={0.85} />
      </mesh>
      {/* Ponytail */}
      <mesh position={[0, 0.05, -0.45]} rotation={[0.6, 0, 0]}>
        <capsuleGeometry args={[0.1, 0.45, 8, 12]} />
        <meshStandardMaterial color={color} roughness={0.85} />
      </mesh>
      {/* Hood */}
      <mesh position={[0, 0.25, -0.15]}>
        <sphereGeometry args={[0.6, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial color="#2D4A2D" roughness={0.7} />
      </mesh>
    </group>
  )
}

function PaladinHair({ color }: { color: string }) {
  return (
    <group>
      <mesh position={[0, 0.2, 0]}>
        <sphereGeometry args={[0.56, 20, 20, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial color={color} roughness={0.85} />
      </mesh>
      {/* Helmet/crown */}
      <mesh position={[0, 0.28, 0]}>
        <cylinderGeometry args={[0.42, 0.5, 0.25, 8]} />
        <meshStandardMaterial color="#C6930A" metalness={0.85} roughness={0.15} />
      </mesh>
      {/* Crown points */}
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i / 5) * Math.PI * 2
        return (
          <mesh key={i} position={[Math.sin(angle) * 0.42, 0.48, Math.cos(angle) * 0.42]}>
            <coneGeometry args={[0.04, 0.12, 6]} />
            <meshStandardMaterial color="#C6930A" metalness={0.85} roughness={0.15} />
          </mesh>
        )
      })}
      {/* Crown gem */}
      <mesh position={[0, 0.42, 0.45]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#22D3EE" emissive="#22D3EE" emissiveIntensity={0.8} />
      </mesh>
    </group>
  )
}

function Weapon({ type, accentColor }: { type: string; accentColor: string }) {
  if (type === 'sword') {
    return (
      <group position={[0.6, 0.2, -0.05]} rotation={[0.2, 0, 0.5]}>
        {/* Blade */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[0.07, 0.8, 0.025]} />
          <meshStandardMaterial color="#D1D5DB" metalness={0.95} roughness={0.05} />
        </mesh>
        {/* Blade edge glow */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[0.075, 0.82, 0.01]} />
          <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.15} transparent opacity={0.5} />
        </mesh>
        {/* Crossguard */}
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[0.28, 0.05, 0.05]} />
          <meshStandardMaterial color={accentColor} metalness={0.7} roughness={0.2} />
        </mesh>
        {/* Grip */}
        <mesh position={[0, -0.12, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 0.22]} />
          <meshStandardMaterial color="#4A3728" roughness={0.9} />
        </mesh>
        {/* Pommel */}
        <mesh position={[0, -0.26, 0]}>
          <sphereGeometry args={[0.05, 10, 10]} />
          <meshStandardMaterial color={accentColor} metalness={0.8} roughness={0.1} />
        </mesh>
      </group>
    )
  }
  if (type === 'staff') {
    return (
      <group position={[0.55, 0.35, -0.1]} rotation={[0.1, 0, 0.12]}>
        {/* Shaft */}
        <mesh>
          <cylinderGeometry args={[0.028, 0.035, 1.8]} />
          <meshStandardMaterial color="#5C3A1E" roughness={0.8} />
        </mesh>
        {/* Orb */}
        <mesh position={[0, 0.95, 0]}>
          <sphereGeometry args={[0.15, 20, 20]} />
          <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={1} transparent opacity={0.85} />
        </mesh>
        {/* Orb glow */}
        <mesh position={[0, 0.95, 0]}>
          <sphereGeometry args={[0.22, 16, 16]} />
          <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={0.4} transparent opacity={0.15} />
        </mesh>
        {/* Orb inner */}
        <mesh position={[0, 0.95, 0]}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={1.5} />
        </mesh>
        {/* Cradle prongs */}
        {[0, 1, 2].map((i) => {
          const angle = (i / 3) * Math.PI * 2
          return (
            <mesh key={i} position={[Math.sin(angle) * 0.08, 0.82, Math.cos(angle) * 0.08]} rotation={[Math.cos(angle) * 0.3, 0, Math.sin(angle) * 0.3]}>
              <capsuleGeometry args={[0.015, 0.15, 4, 8]} />
              <meshStandardMaterial color="#5C3A1E" roughness={0.7} />
            </mesh>
          )
        })}
      </group>
    )
  }
  if (type === 'bow') {
    return (
      <group position={[-0.6, 0.2, 0.15]} rotation={[0, 0.4, 0]}>
        {/* Bow arc */}
        <mesh>
          <torusGeometry args={[0.4, 0.025, 8, 20, Math.PI * 0.85]} />
          <meshStandardMaterial color="#5C3A1E" roughness={0.7} />
        </mesh>
        {/* String */}
        <mesh position={[0.35, 0, 0]} rotation={[0, 0, 0.05]}>
          <cylinderGeometry args={[0.004, 0.004, 0.75]} />
          <meshStandardMaterial color="#D4C5A0" roughness={0.5} />
        </mesh>
        {/* Arrow */}
        <group position={[0.35, 0, 0.05]} rotation={[0, 0, 0]}>
          <mesh>
            <cylinderGeometry args={[0.008, 0.008, 0.7]} />
            <meshStandardMaterial color="#5C3A1E" roughness={0.8} />
          </mesh>
          <mesh position={[0, 0.38, 0]}>
            <coneGeometry args={[0.025, 0.08, 6]} />
            <meshStandardMaterial color="#9CA3AF" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      </group>
    )
  }
  if (type === 'shield') {
    return (
      <group>
        {/* Shield on left */}
        <group position={[-0.55, 0.15, 0.2]} rotation={[0, 0.4, 0]}>
          <mesh>
            <cylinderGeometry args={[0.32, 0.28, 0.05, 8]} />
            <meshStandardMaterial color={accentColor} metalness={0.75} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0, 0.03]}>
            <cylinderGeometry args={[0.14, 0.12, 0.06, 8]} />
            <meshStandardMaterial color="#FFFFFF" metalness={0.8} roughness={0.1} />
          </mesh>
          {/* Cross emblem */}
          <mesh position={[0, 0, 0.055]}>
            <boxGeometry args={[0.04, 0.16, 0.01]} />
            <meshStandardMaterial color={accentColor} metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[0, 0, 0.055]}>
            <boxGeometry args={[0.12, 0.04, 0.01]} />
            <meshStandardMaterial color={accentColor} metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
        {/* Sword in right hand */}
        <group position={[0.55, 0.1, -0.05]} rotation={[0.2, 0, 0.45]}>
          <mesh position={[0, 0.35, 0]}>
            <boxGeometry args={[0.06, 0.6, 0.02]} />
            <meshStandardMaterial color="#D1D5DB" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh>
            <boxGeometry args={[0.2, 0.04, 0.04]} />
            <meshStandardMaterial color={accentColor} metalness={0.7} roughness={0.2} />
          </mesh>
          <mesh position={[0, -0.12, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 0.18]} />
            <meshStandardMaterial color="#4A3728" roughness={0.9} />
          </mesh>
        </group>
      </group>
    )
  }
  return null
}

function ChibiBody({ config, scale = 1 }: { config: CharacterConfig; scale: number }) {
  const groupRef = useRef<Group>(null)
  const skinColor = config.skinColor || '#FFDCB8'

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.8) * 0.04
    }
  })

  const HairComponent = useMemo(() => {
    switch (config.weaponType) {
      case 'sword': return WarriorHair
      case 'staff': return MageHair
      case 'bow': return RangerHair
      case 'shield': return PaladinHair
      default: return WarriorHair
    }
  }, [config.weaponType])

  return (
    <group ref={groupRef} scale={scale}>
      {/* HEAD */}
      <group position={[0, 1.15, 0]}>
        <mesh>
          <sphereGeometry args={[0.55, 32, 32]} />
          <meshStandardMaterial color={skinColor} roughness={0.75} metalness={0.02} />
        </mesh>
        {/* Cheek blush */}
        <mesh position={[-0.3, -0.08, 0.38]} rotation={[0.3, 0.3, 0]}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshStandardMaterial color="#FFB0B0" transparent opacity={0.4} roughness={1} />
        </mesh>
        <mesh position={[0.3, -0.08, 0.38]} rotation={[0.3, -0.3, 0]}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshStandardMaterial color="#FFB0B0" transparent opacity={0.4} roughness={1} />
        </mesh>
        <Eye position={[-0.18, 0.03, 0.45]} eyeColor={config.eyeColor} />
        <Eye position={[0.18, 0.03, 0.45]} eyeColor={config.eyeColor} />
        {/* Eyebrows */}
        <mesh position={[-0.18, 0.2, 0.48]} rotation={[0, 0, 0.15]}>
          <boxGeometry args={[0.14, 0.03, 0.02]} />
          <meshStandardMaterial color={config.hairColor} roughness={0.9} />
        </mesh>
        <mesh position={[0.18, 0.2, 0.48]} rotation={[0, 0, -0.15]}>
          <boxGeometry args={[0.14, 0.03, 0.02]} />
          <meshStandardMaterial color={config.hairColor} roughness={0.9} />
        </mesh>
        {/* Nose */}
        <mesh position={[0, -0.04, 0.52]}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshStandardMaterial color={skinColor} roughness={0.8} />
        </mesh>
        {/* Mouth */}
        <mesh position={[0, -0.15, 0.48]} rotation={[0.3, 0, 0]}>
          <torusGeometry args={[0.06, 0.015, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#D4766A" />
        </mesh>
        {/* Hair */}
        <HairComponent color={config.hairColor} />
      </group>

      {/* BODY */}
      <group position={[0, 0.2, 0]}>
        {/* Torso */}
        <mesh>
          <capsuleGeometry args={[0.28, 0.35, 12, 20]} />
          <meshStandardMaterial color={config.bodyColor} roughness={0.55} metalness={0.15} />
        </mesh>
        {/* Chest detail / armor plate */}
        <mesh position={[0, 0.05, 0.22]}>
          <sphereGeometry args={[0.2, 12, 12, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
          <meshStandardMaterial color={config.accentColor} metalness={0.5} roughness={0.3} />
        </mesh>
        {/* Belt */}
        <mesh position={[0, -0.15, 0]}>
          <torusGeometry args={[0.29, 0.04, 8, 20]} />
          <meshStandardMaterial color={config.accentColor} metalness={0.65} roughness={0.25} />
        </mesh>
        <mesh position={[0, -0.15, 0.28]}>
          <boxGeometry args={[0.1, 0.1, 0.03]} />
          <meshStandardMaterial color={config.accentColor} metalness={0.85} roughness={0.1} emissive={config.accentColor} emissiveIntensity={0.25} />
        </mesh>
        {/* Shoulder pads */}
        <mesh position={[-0.35, 0.15, 0]}>
          <sphereGeometry args={[0.13, 12, 12, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
          <meshStandardMaterial color={config.accentColor} metalness={0.6} roughness={0.25} />
        </mesh>
        <mesh position={[0.35, 0.15, 0]}>
          <sphereGeometry args={[0.13, 12, 12, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
          <meshStandardMaterial color={config.accentColor} metalness={0.6} roughness={0.25} />
        </mesh>
      </group>

      {/* ARMS */}
      <group position={[-0.42, 0.22, 0]} rotation={[0, 0, -0.25]}>
        <mesh>
          <capsuleGeometry args={[0.09, 0.28, 8, 16]} />
          <meshStandardMaterial color={config.bodyColor} roughness={0.6} metalness={0.15} />
        </mesh>
        <mesh position={[0, -0.26, 0]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color={skinColor} roughness={0.75} />
        </mesh>
      </group>
      <group position={[0.42, 0.22, 0]} rotation={[0, 0, 0.25]}>
        <mesh>
          <capsuleGeometry args={[0.09, 0.28, 8, 16]} />
          <meshStandardMaterial color={config.bodyColor} roughness={0.6} metalness={0.15} />
        </mesh>
        <mesh position={[0, -0.26, 0]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color={skinColor} roughness={0.75} />
        </mesh>
      </group>

      {/* LEGS */}
      <mesh position={[-0.14, -0.42, 0]}>
        <capsuleGeometry args={[0.11, 0.22, 8, 16]} />
        <meshStandardMaterial color="#252850" roughness={0.7} />
      </mesh>
      <mesh position={[0.14, -0.42, 0]}>
        <capsuleGeometry args={[0.11, 0.22, 8, 16]} />
        <meshStandardMaterial color="#252850" roughness={0.7} />
      </mesh>

      {/* BOOTS */}
      <mesh position={[-0.14, -0.68, 0.04]}>
        <boxGeometry args={[0.17, 0.12, 0.24]} />
        <meshStandardMaterial color={config.accentColor} roughness={0.45} metalness={0.3} />
      </mesh>
      <mesh position={[0.14, -0.68, 0.04]}>
        <boxGeometry args={[0.17, 0.12, 0.24]} />
        <meshStandardMaterial color={config.accentColor} roughness={0.45} metalness={0.3} />
      </mesh>

      {/* WEAPON */}
      <Weapon type={config.weaponType} accentColor={config.accentColor} />
    </group>
  )
}

function Lights({ accentColor }: { accentColor: string }) {
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[5, 8, 5]} intensity={1.1} color="#FFF8F0" />
      <pointLight position={[-3, 2, 4]} intensity={0.6} color={accentColor} />
      <pointLight position={[3, -1, -3]} intensity={0.25} color="#22D3EE" />
      <hemisphereLight intensity={0.25} color="#7B6CF6" groundColor="#F97316" />
    </>
  )
}

const CLASS_CONFIGS: Record<string, CharacterConfig> = {
  warrior: {
    bodyColor: '#8B1A1A',
    accentColor: '#D4A017',
    hairColor: '#2C1810',
    eyeColor: '#C0392B',
    weaponType: 'sword',
  },
  ranger: {
    bodyColor: '#1B5E3A',
    accentColor: '#8B6914',
    hairColor: '#6B3A2A',
    eyeColor: '#27AE60',
    weaponType: 'bow',
  },
  mage: {
    bodyColor: '#3B1F8E',
    accentColor: '#C084FC',
    hairColor: '#E8E0F0',
    eyeColor: '#A855F7',
    weaponType: 'staff',
  },
  paladin: {
    bodyColor: '#1A3A6B',
    accentColor: '#D4A017',
    hairColor: '#D4A44A',
    eyeColor: '#3B82F6',
    weaponType: 'shield',
  },
}

interface ChibiCharacterProps {
  characterClass?: string
  className?: string
  autoRotate?: boolean
  scale?: number
}

export default function ChibiCharacter({
  characterClass = 'warrior',
  className = '',
  autoRotate = true,
  scale = 1.4,
}: ChibiCharacterProps) {
  const config = CLASS_CONFIGS[characterClass] || CLASS_CONFIGS.warrior

  return (
    <div className={`w-full h-full ${className}`}>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <Canvas camera={{ position: [0, 0.5, 4], fov: 40 }}>
          <Lights accentColor={config.accentColor} />
          <Float speed={1.5} rotationIntensity={0.08} floatIntensity={0.25}>
            <ChibiBody config={config} scale={scale} />
          </Float>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={autoRotate}
            autoRotateSpeed={1.2}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.8}
          />
        </Canvas>
      </Suspense>
    </div>
  )
}

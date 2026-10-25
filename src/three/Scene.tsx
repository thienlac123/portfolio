import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function createPositions(count: number) {
  const arr = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const r = 3 + Math.random() * 3
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    arr[i * 3 + 2] = r * Math.cos(phi)
  }
  return arr
}

function Core() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    const mesh = ref.current
    if (!mesh) return
    mesh.rotation.y += delta * 0.2
    const { x, y } = state.pointer
    mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, y * 0.4, 0.05)
    mesh.position.x = THREE.MathUtils.lerp(mesh.position.x, x * 0.4, 0.05)
  })

  return (
    <Float speed={1.5} floatIntensity={1}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.4, 8]} />
        <MeshDistortMaterial color="#6366f1" distort={0.35} speed={1.5} roughness={0.2} metalness={0.6} />
      </mesh>
    </Float>
  )
}

function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => createPositions(count), [count])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y -= delta * 0.03
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#a5b4fc" sizeAttenuation transparent opacity={0.8} />
    </points>
  )
}

type Props = { active: boolean; particleCount: number }

export default function Scene({ active, particleCount }: Props) {
  return (
    <Canvas
      frameloop={active ? 'always' : 'never'}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.5} />
      <Core />
      <Particles count={particleCount} />
    </Canvas>
  )
}
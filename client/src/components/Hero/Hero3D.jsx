import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Sphere, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// 3D Developer Laptop Model
function LaptopModel({ mouse }) {
  const groupRef = useRef();
  const screenRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Subtle float and mouse tracking tilt
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        Math.sin(time * 0.5) * 0.15 + (mouse.current.x * 0.4),
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        Math.cos(time * 0.5) * 0.08 - (mouse.current.y * 0.2),
        0.05
      );
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]} scale={1.1}>
      {/* Laptop Base */}
      <RoundedBox args={[3.2, 0.15, 2.2]} radius={0.06} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.2} />
      </RoundedBox>

      {/* Keyboard Area / Trackpad */}
      <RoundedBox args={[2.8, 0.02, 1.2]} radius={0.03} smoothness={2} position={[0, 0.08, 0.2]}>
        <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.6} />
      </RoundedBox>
      <RoundedBox args={[1.0, 0.01, 0.6]} radius={0.02} smoothness={2} position={[0, 0.08, 0.75]}>
        <meshStandardMaterial color="#334155" metalness={0.3} roughness={0.4} />
      </RoundedBox>

      {/* Laptop Screen (Angled back) */}
      <group position={[0, 0.08, -1.05]} rotation={[-0.32, 0, 0]}>
        {/* Screen Lid */}
        <RoundedBox args={[3.2, 2.1, 0.1]} radius={0.06} smoothness={4} position={[0, 1.05, 0]}>
          <meshStandardMaterial color="#0f172a" metalness={0.85} roughness={0.2} />
        </RoundedBox>

        {/* Display Bezel & Screen Glow */}
        <mesh position={[0, 1.05, 0.06]} ref={screenRef}>
          <planeGeometry args={[2.95, 1.85]} />
          <meshStandardMaterial 
            color="#0b1120"
            emissive="#1e1b4b"
            emissiveIntensity={0.8}
            roughness={0.1}
          />
        </mesh>

        {/* Code / Glowing IDE accents on Screen */}
        <mesh position={[-0.4, 1.4, 0.07]}>
          <planeGeometry args={[1.8, 0.12]} />
          <meshBasicMaterial color="#6366f1" />
        </mesh>
        <mesh position={[-0.2, 1.15, 0.07]}>
          <planeGeometry args={[2.2, 0.1]} />
          <meshBasicMaterial color="#06b6d4" />
        </mesh>
        <mesh position={[-0.5, 0.9, 0.07]}>
          <planeGeometry args={[1.6, 0.1]} />
          <meshBasicMaterial color="#10b981" />
        </mesh>
        <mesh position={[-0.1, 0.65, 0.07]}>
          <planeGeometry args={[2.4, 0.1]} />
          <meshBasicMaterial color="#a855f7" />
        </mesh>
      </group>
    </group>
  );
}

// Orbiting Tech Spheres / Nodes
function OrbitingNodes({ mouse }) {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.4;
      groupRef.current.rotation.z = Math.sin(time * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Node 1: React Blue */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[2.4, 1.2, 0.8]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <MeshDistortMaterial color="#06b6d4" speed={2.5} distort={0.3} metalness={0.8} roughness={0.2} emissive="#0284c7" emissiveIntensity={0.4} />
        </mesh>
      </Float>

      {/* Node 2: Node.js / Python Green */}
      <Float speed={2.5} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-2.3, 1.5, -0.6]}>
          <octahedronGeometry args={[0.35, 0]} />
          <meshStandardMaterial color="#10b981" metalness={0.6} roughness={0.2} emissive="#059669" emissiveIntensity={0.5} />
        </mesh>
      </Float>

      {/* Node 3: Express / JWT Purple */}
      <Float speed={1.8} rotationIntensity={1} floatIntensity={1.8}>
        <mesh position={[-2.1, -1.2, 1.0]}>
          <icosahedronGeometry args={[0.32, 0]} />
          <meshStandardMaterial color="#8b5cf6" metalness={0.7} roughness={0.3} emissive="#6d28d9" emissiveIntensity={0.5} />
        </mesh>
      </Float>

      {/* Node 4: MongoDB Gold/Amber */}
      <Float speed={2.2} rotationIntensity={1.8} floatIntensity={1.6}>
        <mesh position={[2.2, -1.0, -1.0]}>
          <dodecahedronGeometry args={[0.28, 0]} />
          <meshStandardMaterial color="#f59e0b" metalness={0.6} roughness={0.3} emissive="#d97706" emissiveIntensity={0.4} />
        </mesh>
      </Float>

      {/* Floating Torus Ring (React Atom feel) */}
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.8, 0.02, 16, 100]} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

// Particle Constellation Field
function ParticleField({ count = 120 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#6366f1'),
      new THREE.Color('#06b6d4'),
      new THREE.Color('#a855f7'),
      new THREE.Color('#10b981')
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const color = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.05;
      pointsRef.current.rotation.x = Math.sin(time * 0.03) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

export default function Hero3D() {
  const mouse = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.current.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  return (
    <div 
      className="hero-3d-canvas-wrapper" 
      onMouseMove={handlePointerMove}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-5, -3, 3]} intensity={1.8} color="#6366f1" />
        <pointLight position={[5, 4, 3]} intensity={1.8} color="#06b6d4" />
        
        <ParticleField count={90} />
        
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
          <LaptopModel mouse={mouse} />
        </Float>
        
        <OrbitingNodes mouse={mouse} />
      </Canvas>
    </div>
  );
}

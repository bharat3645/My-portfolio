'use client';

import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

// 3D Node component for the tech network
const Node = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame(() => {
    if (meshRef.current) {
      // Pulse animation
      meshRef.current.scale.x = 0.5 + Math.sin(Date.now() * 0.005) * 0.2;
      meshRef.current.scale.y = 0.5 + Math.sin(Date.now() * 0.005) * 0.2;
      meshRef.current.scale.z = 0.5 + Math.sin(Date.now() * 0.005) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.8} />
    </mesh>
  );
};

// Connection line between nodes
const Connection = ({ start, end }: { start: [number, number, number]; end: [number, number, number] }) => {
  const lineRef = useRef<THREE.Line>(null!);
  const { scene } = useThree();

  useEffect(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(...start),
      new THREE.Vector3(...end),
    ]);
    const material = new THREE.LineBasicMaterial({
      color: 0x64ffda,
      transparent: true,
      opacity: 0.3,
    });
    const line = new THREE.Line(geometry, material);
    lineRef.current = line;
    scene.add(line);

    return () => {
      scene.remove(line);
      geometry.dispose();
      material.dispose();
    };
  }, [start, end, scene]);

  return null;
};

// Main 3D tech network visualization
const TechNetwork = () => {
  // Define node positions representing a tech network
  const nodes = [
    { position: [-5, 0, -3] as [number, number, number], color: "#64ffda" },
    { position: [5, 2, -2] as [number, number, number], color: "#64ffda" },
    { position: [-3, 4, 2] as [number, number, number], color: "#64ffda" },
    { position: [2, -3, 1] as [number, number, number], color: "#64ffda" },
    { position: [0, 1, 5] as [number, number, number], color: "#64ffda" },
  ];

  // Define connections between nodes
  const connections = [
    { start: nodes[0].position, end: nodes[1].position },
    { start: nodes[0].position, end: nodes[2].position },
    { start: nodes[1].position, end: nodes[3].position },
    { start: nodes[2].position, end: nodes[4].position },
    { start: nodes[3].position, end: nodes[4].position },
    { start: nodes[1].position, end: nodes[4].position },
  ];

  return (
    <group>
      {nodes.map((node, index) => (
        <Node key={index} position={node.position} color={node.color} />
      ))}
      {connections.map((conn, index) => (
        <Connection key={index} start={conn.start} end={conn.end} />
      ))}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={0.5}
        minDistance={10}
        maxDistance={20}
      />
    </group>
  );
};

// Main background component with tech-inspired elements
export function TechBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 bg-background overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background/50" />
      
      {/* Animated tech grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(100, 255, 218, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 255, 218, 0.2) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          backgroundPosition: "center center",
          animation: "gridMove 60s linear infinite",
        }}
      />
      
      {/* Floating binary code elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[rgba(100,255,218,0.2)] font-mono text-sm"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              y: `-=${100 + Math.random() * 200}%`,
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 30 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Array.from({ length: 20 }, () => Math.random() > 0.5 ? "1" : "0").join("")}
          </motion.div>
        ))}
      </div>

      {/* 3D Canvas for tech network visualization */}
      <Canvas className="absolute inset-0 opacity-30" camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <TechNetwork />
      </Canvas>
    </div>
  );
}

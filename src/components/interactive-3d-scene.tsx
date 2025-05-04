'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export function Interactive3DScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background

    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); // Enable alpha for transparency
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Geometry (Using Icosahedron for a slightly complex shape)
    const geometry = new THREE.IcosahedronGeometry(1.5, 0); // Radius 1.5, detail 0

    // Material (Using MeshStandardMaterial for better lighting effects)
    const material = new THREE.MeshStandardMaterial({
      color: 0x26A69A, // Teal accent color
      metalness: 0.3,
      roughness: 0.6,
      wireframe: false, // Set to true for wireframe effect
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Soft white light
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.5, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.8, 100);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.005;
      cube.rotation.y += 0.005;

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!currentMount) return;
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Mouse interaction for rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (event: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!isDragging) return;

      const deltaMove = {
        x: event.clientX - previousMousePosition.x,
        y: event.clientY - previousMousePosition.y,
      };

      const rotateSpeed = 0.005;
      cube.rotation.y += deltaMove.x * rotateSpeed;
      cube.rotation.x += deltaMove.y * rotateSpeed;

      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    currentMount.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove); // Listen on window to track mouse outside element
    window.addEventListener('mouseup', onMouseUp); // Listen on window

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      currentMount.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (currentMount && renderer.domElement) {
         // Check if currentMount is still valid before removing child
        try {
            currentMount.removeChild(renderer.domElement);
        } catch (e) {
            console.error("Error removing renderer DOM element:", e);
        }
      }
      // Dispose Three.js objects
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />;
}

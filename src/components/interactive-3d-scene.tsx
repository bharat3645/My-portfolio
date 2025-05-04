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
      60, // Slightly reduced FOV
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6; // Moved camera back slightly

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    // Enable shadows for more realism
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);

    // Geometry (Using TorusKnot for a smoother, more "designed" shape)
    const geometry = new THREE.TorusKnotGeometry(1.2, 0.4, 100, 16); // Parameters tuned for aesthetics

    // Material (Using MeshPhysicalMaterial for advanced properties like clearcoat and transmission)
    const material = new THREE.MeshPhysicalMaterial({
        color: 0x5B8DEF, // Updated to primary theme color (hsl(217, 33%, 50%))
        metalness: 0.1,
        roughness: 0.2,
        clearcoat: 0.8, // Add a clear coat layer
        clearcoatRoughness: 0.2,
        transmission: 0.1, // Slight transparency/light transmission
        ior: 1.5, // Index of refraction
        reflectivity: 0.4,
        wireframe: false, // Keep wireframe off for solid look
    });


    const shape = new THREE.Mesh(geometry, material);
    shape.castShadow = true; // Allow shape to cast shadows
    shape.receiveShadow = true; // Allow shape to receive shadows
    scene.add(shape);

    // Lighting (Refined lighting setup for a softer, more professional look)
    scene.add(new THREE.AmbientLight(0xffffff, 1.0)); // Increased ambient light slightly

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true; // Enable shadow casting
    // Configure shadow properties for better quality
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.8, 100);
    pointLight.position.set(-5, -5, -5);
    scene.add(pointLight);

    // Optional: Add a ground plane to receive shadows if desired
    // const planeGeometry = new THREE.PlaneGeometry(20, 20);
    // const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.3 }); // Material that only receives shadows
    // const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    // plane.rotation.x = -Math.PI / 2;
    // plane.position.y = -2.5; // Adjust position below the shape
    // plane.receiveShadow = true;
    // scene.add(plane);


    // Animation loop
    let targetRotation = { x: 0, y: 0 };
    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth rotation towards target
      shape.rotation.x += (targetRotation.x - shape.rotation.x) * 0.05;
      shape.rotation.y += (targetRotation.y - shape.rotation.y) * 0.05;

      // Subtle continuous rotation
      shape.rotation.y += 0.002;

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

    // Mouse interaction for rotation - update targetRotation instead of direct rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const rotationSpeed = 0.008; // Adjust speed

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

      targetRotation.y += deltaMove.x * rotationSpeed;
      targetRotation.x += deltaMove.y * rotationSpeed;

      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    currentMount.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      currentMount.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (currentMount && renderer.domElement) {
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
      directionalLight.dispose();
      pointLight.dispose();
      // if (planeGeometry) planeGeometry.dispose();
      // if (planeMaterial) planeMaterial.dispose();
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />;
}

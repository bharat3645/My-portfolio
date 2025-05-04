'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export function Interactive3DScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null); // Ref to store renderer instance
  const animationFrameIdRef = useRef<number | null>(null); // Ref to store animation frame ID

  useEffect(() => {
    // Ensure running only on the client-side where window/document are available
    if (typeof window === 'undefined' || !mountRef.current) return;

    const currentMount = mountRef.current;
    let scene: THREE.Scene | null = new THREE.Scene();
    let camera: THREE.PerspectiveCamera | null = new THREE.PerspectiveCamera(
      60,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    const localRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current = localRenderer; // Store renderer instance
    localRenderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    localRenderer.setPixelRatio(window.devicePixelRatio);
    localRenderer.shadowMap.enabled = true;
    localRenderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Prevent adding multiple canvases if effect runs multiple times (though deps array should prevent this)
    if (currentMount.childElementCount === 0) {
      currentMount.appendChild(localRenderer.domElement);
    }


    // Geometry
    const geometry = new THREE.TorusKnotGeometry(1.2, 0.4, 100, 16);

    // Material - Use primary theme color (Cyan: hsl(185 100% 50%)) -> #00FFFF
    const material = new THREE.MeshPhysicalMaterial({
        color: 0x00FFFF, // Updated to theme primary (Cyan)
        metalness: 0.1,
        roughness: 0.2,
        clearcoat: 0.8,
        clearcoatRoughness: 0.2,
        transmission: 0.1, // Slight transparency/light transmission
        ior: 1.5, // Index of refraction
        reflectivity: 0.4,
        wireframe: false,
    });

    const shape = new THREE.Mesh(geometry, material);
    shape.castShadow = true;
    shape.receiveShadow = true;
    scene.add(shape);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    scene.add(directionalLight);

    // Add another accent light (e.g., Pink: hsl(330 100% 55%)) -> #FF1EB3
    const accentLight = new THREE.PointLight(0xFF1EB3, 1.2, 100); // Increased intensity
    accentLight.position.set(-8, 5, -8); // Positioned differently
    scene.add(accentLight);

    // Animation loop
    let targetRotation = { x: 0, y: 0 };
    const clock = new THREE.Clock();

    const animate = () => {
      if (!scene || !camera || !rendererRef.current) return; // Ensure objects exist

      animationFrameIdRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Subtle continuous rotation
      shape.rotation.y = elapsedTime * 0.3; // Rotate on Y-axis based on time
      shape.rotation.x = elapsedTime * 0.15; // Rotate on X-axis slowly

      // Smooth rotation towards target (for mouse interaction)
      // We keep the target rotation effect but dampen it slightly if needed
      shape.rotation.x += (targetRotation.x - shape.rotation.x) * 0.05;
      shape.rotation.y += (targetRotation.y - shape.rotation.y) * 0.05;


      rendererRef.current.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!currentMount || !camera || !rendererRef.current) return;
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Mouse interaction - Updates target rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const rotationSpeed = 0.008;

    const onMouseDown = (event: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
      currentMount.style.cursor = 'grabbing'; // Change cursor on drag
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!isDragging) return;

      const deltaMove = {
        x: event.clientX - previousMousePosition.x,
        y: event.clientY - previousMousePosition.y,
      };

      // Update targetRotation for smooth animation drift on drag
      targetRotation.y += deltaMove.x * rotationSpeed;
      targetRotation.x += deltaMove.y * rotationSpeed;

      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const onMouseUp = () => {
      if (isDragging) {
        isDragging = false;
        currentMount.style.cursor = 'grab'; // Restore cursor
      }
    };
     const onMouseLeave = () => { // Handle mouse leaving the component
      if (isDragging) {
        isDragging = false;
        currentMount.style.cursor = 'grab'; // Restore cursor
      }
    };


    currentMount.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove); // Listen on window to catch drags outside the element
    window.addEventListener('mouseup', onMouseUp); // Listen on window to catch mouse up outside the element
    currentMount.addEventListener('mouseleave', onMouseLeave); // Handle cursor leaving the component


    // Cleanup function
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      window.removeEventListener('resize', handleResize);
      currentMount.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      currentMount.removeEventListener('mouseleave', onMouseLeave);

      // Dispose Three.js objects
      geometry?.dispose();
      material?.dispose();
      ambientLight?.dispose();
      directionalLight?.dispose();
      accentLight?.dispose(); // Dispose added light

       // Clean up renderer and scene
       if (rendererRef.current) {
        // Attempt to remove the canvas element
        if (currentMount && rendererRef.current.domElement.parentNode === currentMount) {
           try {
             currentMount.removeChild(rendererRef.current.domElement);
           } catch (e) {
             console.error("Error removing renderer DOM element during cleanup:", e);
           }
        }
        rendererRef.current.dispose(); // Dispose the renderer
        rendererRef.current = null; // Clear the ref
       }

      // Help garbage collector by nullifying references
       scene = null;
       camera = null;

    };
  }, []); // Empty dependency array ensures this runs once on mount

  return <div ref={mountRef} className="w-full h-full cursor-grab" />; // Initial cursor style
}

import './Hero.scss';
import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import boatModel from "../../images/boat.glb"; // Ganti dengan path yang benar
import cn from 'classnames';

export default function Hero() {
  const [reveal, setReveal] = useState(false);
  const containerRef = useRef(null);
  const boatRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setReveal(true), 100);

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const container = containerRef.current;
    container.appendChild(renderer.domElement);

    // Load 3D model
    const loader = new GLTFLoader();
    loader.load(boatModel, (gltf) => {
      const boat = gltf.scene;
      boat.scale.set(0.01, 0.01, 0.01);
      scene.add(boat);
      boatRef.current = boat;
    });

    // Handle window resize
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (boatRef.current) {
        boatRef.current.rotation.y += 0.005;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="main-hero-section" data-scroll-section>
      <div className="container-title">
        <div className="text text-24 font-neutral ml-1 mb-24 tablet-ml-0 tablet-mb-0" data-scroll data-scroll-speed="-1">Situs</div>
        <h1 id="hero-title" className="font-white ml-1 tablet-ml-0 title title-hero" data-scroll data-scroll-direction="vertical" data-scroll-speed="1">
          Perahu Kuno
        </h1>
        <div className="text text-24 font-neutral ml-1 tablet-ml-0 from-france" data-scroll data-scroll-speed="-1">Desa Punjulharjo, Rembang</div>
      </div>
      <div ref={containerRef} className={cn("hero-3d", { "is-reveal": reveal })} />
      <div className="scroll-text text font-white">Scroll to explore</div>
    </section>
  );
}

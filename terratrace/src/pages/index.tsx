import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Mesh, MeshStandardMaterial, TextureLoader } from 'three';
import { Leaf, Building2, Shield } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';

const RotatingGlobe = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  const textureLoader = new TextureLoader();
  const earthTexture = textureLoader.load('/textures/earth.jpg'); // Ensure you have this texture in the public/textures folder

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
};

interface ImpactMetricProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  value: string;
  description: string;
}

const ImpactMetric: React.FC<ImpactMetricProps> = ({ icon: Icon, title, value, description }) => (
  <div className="text-center p-6">
    <div className="flex justify-center mb-4">
      <div className="p-3 bg-green-100 rounded-full">
        <Icon className="w-6 h-6 text-green-600" />
      </div>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-3xl font-bold text-green-600 mb-2">{value}</p>
    <p className="text-gray-600">{description}</p>
  </div>
);

const IndexPage = () => {
  const router = useRouter();

  return (
    <div className="w-full">
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <header className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Welcome to</span>
                  <span className="block text-green-600">TerraTrace</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Revolutionizing carbon credit transactions with blockchain technology, real-time monitoring, and direct connections to verified environmental projects.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <Button className="px-8 py-3 bg-green-600 hover:bg-green-700" onClick={() => router.push('/dashboard')}>Get Started</Button>
                </div>
              </div>
            </header>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Canvas camera={{ position: [0, 0, 2.5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <RotatingGlobe />
            <OrbitControls enableZoom={false} enablePan={false} />
            <Stars />
          </Canvas>
        </div>
      </div>
      
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImpactMetric icon={Leaf} title="Carbon Credits" value="4.3M+" description="Verified carbon credits tracked" />
            <ImpactMetric icon={Building2} title="Partners" value="250+" description="Corporate partners engaged" />
            <ImpactMetric icon={Shield} title="Projects" value="45+" description="Verified environmental projects" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

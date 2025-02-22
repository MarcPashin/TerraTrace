import React from 'react';
import { Leaf, Building2, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';

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
    <div className="w-full min-h-screen flex flex-col justify-between bg-white">
      <div className="relative flex flex-col items-center justify-center py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
            <span className="block">Welcome to</span>
            <span className="block text-green-600">TerraTrace</span>
          </h1>
          <p className="mt-6 text-lg text-gray-500 sm:text-xl max-w-2xl mx-auto">
            Revolutionizing carbon credit transactions with blockchain technology, real-time monitoring, and direct connections to verified environmental projects.
          </p>
          <div className="mt-12 flex justify-center">
            <Button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-lg" onClick={() => router.push('/dashboard')}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-40 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
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
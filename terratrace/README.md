Updating TS

import React, { useState } from 'react';
import { Globe, Leaf, ArrowRight, Building2, Shield } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Globe3D = () => {
  // This would be your interactive globe component
  // For now, we'll create a stylized placeholder
  return (
    <div className="relative w-full h-96 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Globe className="w-48 h-48 text-white opacity-50" />
      </div>
      {/* Animated dots representing activity */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping" />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-red-400 rounded-full animate-ping" />
    </div>
  );
};

const ImpactMetric = ({ icon: Icon, title, value, description }) => (
  <div className="text-center p-6">
    <div className="flex justify-center mb-4">
      <div className="p-3 bg-blue-100 rounded-full">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-3xl font-bold text-blue-600 mb-2">{value}</p>
    <p className="text-gray-600">{description}</p>
  </div>
);

const LandingPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Amazon Reforestation",
      location: "Brazil",
      credits: 45000,
      retired: 25000,
      active: 20000,
      companies: [
        { name: "Microsoft", percentage: 75, credits: 15000 },
        { name: "Google", percentage: 45, credits: 10000 }
      ]
    },
    {
      name: "Solar Farm Initiative",
      location: "Nevada, USA",
      credits: 30000,
      retired: 15000,
      active: 15000,
      companies: [
        { name: "Amazon", percentage: 60, credits: 8000 },
        { name: "Apple", percentage: 35, credits: 7000 }
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Transform the</span>
                  <span className="block text-blue-600">Carbon Credit Market</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Revolutionizing carbon credit transactions with blockchain technology, real-time monitoring, and direct connections to verified environmental projects.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <Button className="px-8 py-3">Get Started</Button>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Globe3D />
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImpactMetric 
              icon={Leaf}
              title="Carbon Credits"
              value="4.3M+"
              description="Verified carbon credits tracked"
            />
            <ImpactMetric 
              icon={Building2}
              title="Partners"
              value="250+"
              description="Corporate partners engaged"
            />
            <ImpactMetric 
              icon={Shield}
              title="Projects"
              value="45+"
              description="Verified environmental projects"
            />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Active Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>{project.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-gray-600">Location: {project.location}</p>
                        <p className="text-gray-600">Total Credits: {project.credits.toLocaleString()}</p>
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-blue-600">View Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{project.name}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded">
                        <p className="text-sm text-gray-600">Active Credits</p>
                        <p className="text-2xl font-bold text-green-600">{project.active.toLocaleString()}</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded">
                        <p className="text-sm text-gray-600">Retired Credits</p>
                        <p className="text-2xl font-bold text-blue-600">{project.retired.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold">Corporate Partners</h3>
                      {project.companies.map((company, idx) => (
                        <div key={idx} className="border p-4 rounded">
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{company.name}</span>
                            <span>{company.credits.toLocaleString()} credits</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${company.percentage}%` }}
                            />
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {company.percentage}% of carbon goal achieved
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
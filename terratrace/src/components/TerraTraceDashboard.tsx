import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Trees, Wind, Shield, CheckCircle, Award, Globe } from 'lucide-react';

type ProjectKey = 'reforestation' | 'renewable';

const TerraTraceDashboard = () => {
  const [selectedProject, setSelectedProject] = useState('reforestation');
  
  const projectData = {
    reforestation: {
      name: "Amazon Reforestation Initiative",
      credits: 2500,
      impact: "45,000 trees planted",
      verification: "Verified by EcoAudit",
      lastUpdated: "22 Feb 2025",
      monthlyData: [
        { month: 'Sep', credits: 400 },
        { month: 'Oct', credits: 450 },
        { month: 'Nov', credits: 480 },
        { month: 'Dec', credits: 520 },
        { month: 'Jan', credits: 550 },
        { month: 'Feb', credits: 600 }
      ]
    },
    renewable: {
      name: "Solar Farm Project",
      credits: 1800,
      impact: "2.5M kWh generated",
      verification: "Verified by GreenCert",
      lastUpdated: "22 Feb 2025",
      monthlyData: [
        { month: 'Sep', credits: 250 },
        { month: 'Oct', credits: 280 },
        { month: 'Nov', credits: 320 },
        { month: 'Dec', credits: 350 },
        { month: 'Jan', credits: 380 },
        { month: 'Feb', credits: 420 }
      ]
    }
  };

  const nonprofits = [
    {
      name: "Conservation International",
      logo: "/api/placeholder/150/60",
      description: "Global environmental nonprofit focused on nature conservation and climate action.",
      verification: "ISO 14001 certified",
      impact: "2.3B tons of CO₂ emissions reduced",
      projects: ["Forest Conservation", "Ocean Protection", "Sustainable Agriculture"]
    },
    {
      name: "Rainforest Alliance",
      logo: "/api/placeholder/150/60",
      description: "International nonprofit working to protect forests and biodiversity.",
      verification: "FSC Accredited",
      impact: "6.9M hectares of forest certified",
      projects: ["Sustainable Forestry", "Farmer Training", "Biodiversity"]
    }
  ];

  const corporations = [
    {
      name: "Microsoft",
      logo: "/api/placeholder/150/60",
      commitmentSize: "$1B Climate Innovation Fund",
      focusAreas: ["Carbon Removal", "Forest Conservation"]
    },
    {
      name: "Amazon",
      logo: "/api/placeholder/150/60",
      commitmentSize: "Climate Pledge Fund",
      focusAreas: ["Renewable Energy", "Transportation"]
    }
  ];

  const recentTransactions = [
    { id: "0x8f2e...3d4f", type: "Credit Purchase", amount: 100, timestamp: "22 Feb 2025 14:30" },
    { id: "0x7a1b...9c2e", type: "Verification", amount: 50, timestamp: "22 Feb 2025 13:15" }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-4">
      <div className="space-y-8 mb-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Verified Partners</h2>
          <p className="text-gray-600">Connecting verified environmental initiatives with forward-thinking companies</p>
        </div>

        <Tabs defaultValue="nonprofits" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="nonprofits">
              <Globe className="mr-2 h-4 w-4" />
              Verified Nonprofits
            </TabsTrigger>
            <TabsTrigger value="corporate">
              <Award className="mr-2 h-4 w-4" />
              Corporate Partners
            </TabsTrigger>
          </TabsList>

          <TabsContent value="nonprofits">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nonprofits.map((org, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <img src={org.logo} alt={org.name} className="h-12" />
                      <div className="flex items-center">
                        <Shield className="text-green-500 h-5 w-5 mr-1" />
                        <span className="text-sm text-green-500">Verified Partner</span>
                      </div>
                    </div>
                    <CardTitle>{org.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">{org.description}</p>
                      <div className="border-t pt-4">
                        <div className="flex items-center mb-2">
                          <CheckCircle className="text-blue-500 h-4 w-4 mr-2" />
                          <span className="font-semibold">{org.verification}</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">Impact: {org.impact}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {org.projects.map((project, idx) => (
                            <span 
                              key={idx}
                              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="corporate">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {corporations.map((company, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <img src={company.logo} alt={company.name} className="h-12" />
                      <div className="flex items-center">
                        <Award className="text-blue-500 h-5 w-5 mr-1" />
                        <span className="text-sm text-blue-500">Corporate Partner</span>
                      </div>
                    </div>
                    <CardTitle>{company.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="font-semibold">{company.commitmentSize}</p>
                      <div className="flex flex-wrap gap-2">
                        {company.focusAreas.map((area, idx) => (
                          <span 
                            key={idx}
                            className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">TerraTrace Dashboard</h1>
          <p className="text-gray-500">Real-time carbon credit monitoring and verification</p>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="text-green-500" />
          <span className="text-green-500 font-semibold">Blockchain Secured</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="reforestation" className="w-full">
              <TabsList>
                <TabsTrigger value="reforestation" onClick={() => setSelectedProject('reforestation')}>
                  <Trees className="mr-2 h-4 w-4" />
                  Reforestation
                </TabsTrigger>
                <TabsTrigger value="renewable" onClick={() => setSelectedProject('renewable')}>
                  <Wind className="mr-2 h-4 w-4" />
                  Renewable Energy
                </TabsTrigger>
              </TabsList>

              <TabsContent value="reforestation" className="space-y-4">
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{projectData.reforestation.name}</h3>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-gray-500">Total Credits</p>
                      <p className="text-2xl font-bold">{projectData.reforestation.credits}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Impact</p>
                      <p className="text-2xl font-bold">{projectData.reforestation.impact}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="renewable" className="space-y-4">
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{projectData.renewable.name}</h3>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-gray-500">Total Credits</p>
                      <p className="text-2xl font-bold">{projectData.renewable.credits}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Impact</p>
                      <p className="text-2xl font-bold">{projectData.renewable.impact}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={projectData[selectedProject].monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="credits" 
                    stroke="#2563eb" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Verification Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" />
                <div>
                  <p className="font-semibold">Last Verification</p>
                  <p className="text-sm text-gray-500">{projectData[selectedProject].lastUpdated}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-blue-500" />
                <div>
                  <p className="font-semibold">Auditor</p>
                  <p className="text-sm text-gray-500">{projectData[selectedProject].verification}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Blockchain Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Activity className="text-blue-500" />
                  <div>
                    <p className="font-semibold">{transaction.type}</p>
                    <p className="text-sm text-gray-500">ID: {transaction.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{transaction.amount} credits</p>
                  <p className="text-sm text-gray-500">{transaction.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TerraTraceDashboard;
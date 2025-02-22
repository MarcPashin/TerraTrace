import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

const LedgerPage = () => {
  const transactions = [
    {
      id: "0x8f2e...3d4f",
      type: "Credit Purchase",
      amount: 100,
      timestamp: "22 Feb 2025 14:30",
      company: "Microsoft",
      industry: "Technology",
      projectName: "Amazon Reforestation Initiative",
      status: "active",
      carbonGoalProgress: 75
    },
    {
      id: "0x7a1b...9c2e",
      type: "Credit Retirement",
      amount: 50,
      timestamp: "22 Feb 2025 13:15",
      company: "Google",
      industry: "Technology",
      projectName: "Solar Farm Project",
      status: "retired",
      carbonGoalProgress: 45
    },
    {
      id: "0x5e4c...1a2b",
      type: "Credit Purchase",
      amount: 200,
      timestamp: "21 Feb 2025 10:45",
      company: "Tesla",
      industry: "Automotive",
      projectName: "Wind Power Initiative",
      status: "active",
      carbonGoalProgress: 60
    }
  ];

  return (
    <>
      <Navbar />
      <div className="w-full max-w-6xl mx-auto p-4 space-y-4 mt-24 md:mt-32">
        <h1 className="text-3xl font-bold text-center mb-6">Carbon Credit Ledger</h1>
        <Card>
          <CardHeader>
            <CardTitle>Recent Blockchain Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((transaction, index) => (
                <div key={index} className="p-4 border rounded-lg bg-white shadow-md">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Activity className={transaction.status === 'active' ? 'text-green-500' : 'text-blue-500'} />
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
                  <div className="mt-3 grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-600">Company</p>
                      <p className="font-semibold">{transaction.company}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-600">Industry</p>
                      <p className="font-semibold">{transaction.industry}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-600">Project</p>
                      <p className="font-semibold">{transaction.projectName}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-600">Status</p>
                      <p className={`font-semibold ${transaction.status === 'active' ? 'text-green-600' : 'text-blue-600'}`}>{transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-2">Carbon Goal Progress</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${transaction.carbonGoalProgress}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {transaction.carbonGoalProgress}% of pledge fulfilled
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default LedgerPage;
import React, { useState } from 'react';
import { Menu, Home, LayoutDashboard, BookOpen } from 'lucide-react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const router = useRouter();

  const navigate = (tab: string, path: string) => {
    setActiveTab(tab);
    setIsOpen(false);
    router.push(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 border-b bg-white shadow-md z-50 rounded-b-xl p-4">
      <div className="flex items-center justify-between px-6 py-3">
        <button 
          className="h-10 w-10 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors rounded-full bg-gray-100 p-2 shadow-md"
          onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-3xl font-extrabold text-primary rounded-lg px-4 py-2 bg-green-100 shadow-md">TerraTrace</h1>
      </div>
      {isOpen && (
        <div className="absolute left-4 top-16 w-56 bg-white shadow-lg rounded-lg py-2 space-y-2 p-2 z-50">
          <button 
            className={`flex items-center px-4 py-2 w-full text-left rounded-lg hover:bg-green-100 transition-colors ${activeTab === 'home' ? 'bg-green-200' : ''}`} 
            onClick={() => navigate('home', '/')}> 
            <Home className="h-6 w-6 text-green-600 mr-2" /> Home
          </button>
          <button 
            className={`flex items-center px-4 py-2 w-full text-left rounded-lg hover:bg-green-100 transition-colors ${activeTab === 'dashboard' ? 'bg-green-200' : ''}`} 
            onClick={() => navigate('dashboard', '/dashboard')}> 
            <LayoutDashboard className="h-6 w-6 text-green-600 mr-2" /> Dashboard
          </button>
          <button 
            className={`flex items-center px-4 py-2 w-full text-left rounded-lg hover:bg-green-100 transition-colors ${activeTab === 'ledger' ? 'bg-green-200' : ''}`} 
            onClick={() => navigate('ledger', '/ledger')}> 
            <BookOpen className="h-6 w-6 text-green-600 mr-2" /> Ledger
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
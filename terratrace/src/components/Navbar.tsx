import { useRouter } from 'next/router';
import { Home, BookOpen, Menu } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  const navigate = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <nav className="relative">
      <div className="flex items-center justify-between px-6 py-3">
        <button 
          className="h-10 w-10 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors rounded-full bg-gray-100 p-2 shadow-md"
          onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6" />
        </button>
        <h1 
          className="text-3xl font-extrabold text-primary rounded-lg px-4 py-2 bg-green-100 shadow-md cursor-pointer"
          onClick={() => navigate('/')}
        >
          TerraTrace
        </h1>
      </div>
      {isOpen && (
        <div className="absolute left-4 top-16 w-56 bg-white shadow-lg rounded-lg py-2 space-y-2 p-2 z-50">
          <button 
            className={`flex items-center px-4 py-2 w-full text-left rounded-lg hover:bg-green-100 transition-colors ${currentPath === '/dashboard' ? 'bg-green-300' : ''}`} 
            onClick={() => navigate('/dashboard')}> 
            <Home className="h-6 w-6 text-green-600 mr-2" /> Home
          </button>
          <button 
            className={`flex items-center px-4 py-2 w-full text-left rounded-lg hover:bg-green-100 transition-colors ${currentPath === '/ledger' ? 'bg-green-300' : ''}`} 
            onClick={() => navigate('/ledger')}> 
            <BookOpen className="h-6 w-6 text-green-600 mr-2" /> Ledger
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
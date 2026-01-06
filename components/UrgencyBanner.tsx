import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const UrgencyBanner: React.FC = () => {
  return (
    <div className="bg-red-600 text-white py-3 px-4 text-center font-bold text-sm md:text-base fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-center gap-2 animate-pulse">
        <AlertTriangle size={20} className="text-yellow-300" />
        <span>ESPERE! NÃO FECHE ESSA PÁGINA AINDA!</span>
      </div>
    </div>
  );
};
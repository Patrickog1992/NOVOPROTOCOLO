import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const GuaranteeBadge: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 mt-8 max-w-sm mx-auto">
      <ShieldCheck size={48} className="text-green-600 mb-2" />
      <h3 className="text-lg font-bold text-gray-800">Garantia de 7 Dias</h3>
      <p className="text-sm text-gray-600 text-center mt-1">
        Se você não gostar, devolvemos 100% do seu dinheiro. Sem perguntas.
      </p>
    </div>
  );
};
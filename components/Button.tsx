import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  subtext?: string;
}

export const Button: React.FC<ButtonProps> = ({ href, children, className = '', subtext }) => {
  return (
    <a
      href={href}
      className={`group flex flex-col items-center justify-center bg-green-600 hover:bg-green-500 text-white font-bold py-5 px-8 rounded-xl shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.23)] hover:-translate-y-1 transition-all duration-200 w-full md:max-w-xl mx-auto border-b-4 border-green-800 ${className}`}
    >
      <span className="text-xl md:text-2xl uppercase tracking-wide flex items-center gap-2">
        {children}
      </span>
      {subtext && (
        <span className="text-xs md:text-sm font-medium opacity-90 mt-1 text-green-100">
          {subtext}
        </span>
      )}
    </a>
  );
};
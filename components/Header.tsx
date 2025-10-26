
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-wider [text-shadow:0_0_10px_rgba(0,255,255,0.7)]">
        Quantum-Accelerated Rendering Unit
      </h1>
      <p className="mt-2 text-lg text-gray-400 max-w-3xl mx-auto">
        A conceptual simulation of a hybrid quantum-classical system for next-generation graphics rendering.
      </p>
    </header>
  );
};

export default Header;

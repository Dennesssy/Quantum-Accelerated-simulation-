
import React from 'react';
import { AiIcon } from './icons/AiIcon';
import { QuantumChipIcon } from './icons/QuantumChipIcon';

interface QuantumCoreProps {
  isActive: boolean;
  borderColor: string;
}

const Qubit: React.FC<{ delay: string }> = ({ delay }) => (
  <div className="relative w-4 h-4">
    <div 
      className={`absolute inset-0 bg-fuchsia-500 rounded-full animate-pulse`}
      style={{ animationDelay: delay }}
    />
    <div 
      className={`absolute inset-0 bg-cyan-400 rounded-full animate-ping`}
      style={{ animationDelay: delay }}
    />
  </div>
);

const QuantumCore: React.FC<QuantumCoreProps> = ({ isActive, borderColor }) => {
  return (
    <div className={`p-4 h-full bg-black/30 rounded-lg border-2 backdrop-blur-sm transition-all duration-500 ${borderColor}`}>
      <h2 className="text-xl font-bold text-center text-cyan-300 mb-4">1. Automated Qubit Control System (AQCS)</h2>
      <div className="flex flex-col items-center space-y-4">
        <AiIcon className="w-16 h-16 text-cyan-400" />
        <p className="text-center text-sm text-gray-400">AI-driven layer manages quantum hardware, performing continuous auto-tuning and error correction.</p>
        
        <div className="w-full h-px bg-gray-700 my-2"></div>

        <QuantumChipIcon className="w-16 h-16 text-fuchsia-500" />
        <p className="text-center text-sm text-gray-400">A solid-state array of nuclear spin qubits with long coherence times.</p>
        
        <div className="grid grid-cols-4 gap-4 p-4 bg-gray-900/50 rounded-md">
          {Array.from({ length: 16 }).map((_, i) => (
            <Qubit key={i} delay={`${i * 50}ms`} />
          ))}
        </div>
        
        {isActive && (
          <div className="text-center mt-2 p-2 bg-cyan-900/50 rounded-md">
            <p className="text-cyan-300 animate-pulse font-semibold">STATUS: CALIBRATING QUBITS...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuantumCore;

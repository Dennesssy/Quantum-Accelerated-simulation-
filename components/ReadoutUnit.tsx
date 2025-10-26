
import React from 'react';
import { GpuIcon } from './icons/GpuIcon';

interface ReadoutUnitProps {
  isActive: boolean;
  borderColor: string;
}

const Arrow: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <div className="relative w-full h-8 flex items-center justify-center my-2">
    <div className="text-2xl text-cyan-400 transform -rotate-90">↓</div>
    <div
      className={`absolute top-0 left-1/2 w-0.5 h-full bg-cyan-400 origin-top transform -translate-x-1/2 transition-transform duration-1000 ease-in-out ${isActive ? 'scale-y-100' : 'scale-y-0'}`}
    />
  </div>
);

const ReadoutUnit: React.FC<ReadoutUnitProps> = ({ isActive, borderColor }) => {
  return (
    <div className={`p-4 h-full bg-black/30 rounded-lg border-2 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-500 ${borderColor}`}>
      <h2 className="text-xl font-bold text-center text-cyan-300 mb-4">2. High-Fidelity Readout</h2>
      
      <div className="flex flex-col items-center space-y-2 text-center">
          <div className="text-sm">Nuclear Spin State</div>
          <div className="w-8 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center shadow-[0_0_10px_rgba(217,70,239,0.8)]">
            <span className="font-mono text-xs">|ψ⟩</span>
          </div>
          
          <Arrow isActive={isActive} />

          <div className="text-sm">Electron Spin Interface</div>
          <div className="w-8 h-8 rounded-full border-2 border-yellow-400 flex items-center justify-center shadow-[0_0_10px_rgba(250,204,21,0.8)]">
             <span className="font-mono text-xs">|e-⟩</span>
          </div>

          <Arrow isActive={isActive} />

          <div className="text-sm">Optical Readout & Data Transfer</div>
          <GpuIcon className="w-10 h-10 text-green-400" />
      </div>

      {isActive && (
        <div className="text-center mt-4 p-2 bg-cyan-900/50 rounded-md">
          <p className="text-cyan-300 animate-pulse font-semibold">STATUS: TRANSFERRING STATE...</p>
        </div>
      )}
    </div>
  );
};

export default ReadoutUnit;

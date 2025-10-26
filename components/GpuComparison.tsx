
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { GpuIcon } from './icons/GpuIcon';
import { QuantumChipIcon } from './icons/QuantumChipIcon';
import { CLASSICAL_INTERSECTIONS, QUANTUM_INTERSECTIONS } from '../constants';

interface GpuComparisonProps {
  isActive: boolean;
  borderColor: string;
  progress: number;
}

const GpuComparison: React.FC<GpuComparisonProps> = ({ isActive, borderColor, progress }) => {
  const gpuProgress = Math.max(0, (progress - 70) / 30); // Progress within the GPU stage (0 to 1)

  const classicalValue = isActive ? Math.round(CLASSICAL_INTERSECTIONS * gpuProgress) : 0;
  const quantumValue = isActive ? Math.round(QUANTUM_INTERSECTIONS * gpuProgress) : 0;

  const data = [
    {
      name: 'Intersection Tests',
      'Classical GPU': classicalValue,
      'QARU': quantumValue,
    },
    {
      name: 'Energy Usage (p.u.)',
      'Classical GPU': classicalValue,
      'QARU': quantumValue,
    },
  ];
  
  const COLORS = ['#f472b6', '#22d3ee'];

  return (
    <div className={`p-4 h-full bg-black/30 rounded-lg border-2 backdrop-blur-sm transition-all duration-500 ${borderColor}`}>
      <h2 className="text-xl font-bold text-center text-cyan-300 mb-4">3. Shader Energy Reduction</h2>
      
      <div className="grid grid-cols-2 gap-4 text-center text-sm mb-4">
        <div>
          <GpuIcon className="w-12 h-12 mx-auto mb-2 text-pink-500" />
          <h3 className="font-bold">Classical Process</h3>
          <p className="text-gray-400">Billions of sequential ray-object intersection tests on GPU.</p>
        </div>
        <div>
          <div className="flex justify-center items-center gap-2">
             <QuantumChipIcon className="w-8 h-8 text-fuchsia-500" />
             <span className="text-xl">+</span>
             <GpuIcon className="w-8 h-8 text-cyan-400" />
          </div>
          <h3 className="font-bold">Quantum-Accelerated</h3>
          <p className="text-gray-400">Quantum search algorithm pre-filters intersections, reducing GPU load.</p>
        </div>
      </div>

      <div className="w-full h-52">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" barCategoryGap="20%">
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="name" stroke="#9ca3af" width={120} axisLine={false} tickLine={false} />
            <Tooltip
                cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
                contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
            />
            <Legend wrapperStyle={{ color: '#e5e7eb' }} />
            <Bar dataKey="Classical GPU" fill="#f472b6" background={{ fill: '#4b5563' }} radius={[0, 4, 4, 0]} />
            <Bar dataKey="QARU" fill="#22d3ee" background={{ fill: '#4b5563' }} radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {isActive && (
        <div className="text-center mt-2 p-2 bg-cyan-900/50 rounded-md">
          <p className="text-cyan-300 animate-pulse font-semibold">STATUS: ACCELERATING RENDER PIPELINE...</p>
        </div>
      )}
    </div>
  );
};

export default GpuComparison;

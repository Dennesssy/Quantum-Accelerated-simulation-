
import React from 'react';
import { SimulationState } from '../types';

interface SimulationControlsProps {
  simulationState: SimulationState;
  onStart: () => void;
}

const SimulationControls: React.FC<SimulationControlsProps> = ({ simulationState, onStart }) => {
  const buttonText = () => {
    switch (simulationState) {
      case SimulationState.Running:
        return 'Simulation in Progress...';
      case SimulationState.Finished:
        return 'Run Simulation Again';
      case SimulationState.Idle:
      default:
        return 'Start Simulation';
    }
  };

  const isDisabled = simulationState === SimulationState.Running;

  return (
    <div className="mt-4">
      <button
        onClick={onStart}
        disabled={isDisabled}
        className={`px-8 py-4 text-xl font-bold rounded-lg transition-all duration-300 transform
          ${isDisabled
            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
            : 'bg-cyan-500 text-gray-900 hover:bg-cyan-400 hover:scale-105 active:scale-100 shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:shadow-[0_0_25px_rgba(0,255,255,0.8)]'
          }`}
      >
        {buttonText()}
      </button>
    </div>
  );
};

export default SimulationControls;

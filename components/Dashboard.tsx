
import React from 'react';
import QuantumCore from './QuantumCore';
import ReadoutUnit from './ReadoutUnit';
import GpuComparison from './GpuComparison';
import { SimulationState, SimulationStage } from '../types';

interface DashboardProps {
  simulationState: SimulationState;
  currentStage: SimulationStage | null;
  progress: number;
}

const Dashboard: React.FC<DashboardProps> = ({ simulationState, currentStage, progress }) => {
  const getStageOpacity = (stage: SimulationStage) => {
    if (simulationState === SimulationState.Idle || simulationState === SimulationState.Finished) return 'opacity-50';
    return currentStage === stage ? 'opacity-100' : 'opacity-50';
  }
  
  const getBorderColor = (stage: SimulationStage) => {
    if (simulationState === SimulationState.Running && currentStage === stage) {
      return 'border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.5)]';
    }
    return 'border-gray-700';
  }

  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">
      <div className={`lg:col-span-2 transition-all duration-500 ${getStageOpacity(SimulationStage.AQCS)}`}>
        <QuantumCore isActive={currentStage === SimulationStage.AQCS} borderColor={getBorderColor(SimulationStage.AQCS)} />
      </div>

      <div className={`lg:col-span-1 flex flex-col justify-center items-center transition-all duration-500 ${getStageOpacity(SimulationStage.Readout)}`}>
        <ReadoutUnit isActive={currentStage === SimulationStage.Readout} borderColor={getBorderColor(SimulationStage.Readout)} />
      </div>

      <div className={`lg:col-span-2 transition-all duration-500 ${getStageOpacity(SimulationStage.GPU)}`}>
        <GpuComparison 
          isActive={currentStage === SimulationStage.GPU} 
          borderColor={getBorderColor(SimulationStage.GPU)} 
          progress={progress}
        />
      </div>
    </div>
  );
};

export default Dashboard;

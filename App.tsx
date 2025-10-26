
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import SimulationControls from './components/SimulationControls';
import Conclusion from './components/Conclusion';
import { SimulationState, SimulationStage } from './types';
import { SIMULATION_STAGES, SIMULATION_DURATION } from './constants';

const App: React.FC = () => {
  const [simulationState, setSimulationState] = useState<SimulationState>(SimulationState.Idle);
  const [currentStage, setCurrentStage] = useState<SimulationStage | null>(null);
  const [progress, setProgress] = useState(0);

  const runSimulation = useCallback(() => {
    setSimulationState(SimulationState.Running);
    setProgress(0);
    setCurrentStage(null);

    let startTime = Date.now();

    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const currentProgress = Math.min((elapsedTime / SIMULATION_DURATION) * 100, 100);
      setProgress(currentProgress);

      const activeStage = SIMULATION_STAGES.find(
        stage => currentProgress >= stage.start && currentProgress < stage.end
      );
      setCurrentStage(activeStage ? activeStage.name : null);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setSimulationState(SimulationState.Finished);
        setCurrentStage(SimulationStage.Done);
      }
    }, 100);
  }, []);
  
  const resetSimulation = useCallback(() => {
      setSimulationState(SimulationState.Idle);
      setProgress(0);
      setCurrentStage(null);
  }, []);

  const handleStart = () => {
    if (simulationState === SimulationState.Idle || simulationState === SimulationState.Finished) {
      resetSimulation();
      // A small delay to allow UI to reset before starting
      setTimeout(() => {
          runSimulation();
      }, 100);
    }
  };


  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans p-4 md:p-8 flex flex-col antialiased">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center space-y-8">
        <Dashboard 
          simulationState={simulationState} 
          currentStage={currentStage}
          progress={progress}
        />
        <SimulationControls
          simulationState={simulationState}
          onStart={handleStart}
        />
      </main>
      <Conclusion 
        show={simulationState === SimulationState.Finished} 
        onReset={handleStart}
      />
    </div>
  );
};

export default App;

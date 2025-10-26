
import { SimulationStage } from './types';

export const SIMULATION_DURATION = 15000; // in milliseconds

export const SIMULATION_STAGES = [
  { name: SimulationStage.AQCS, start: 0, end: 40 },
  { name: SimulationStage.Readout, start: 40, end: 70 },
  { name: SimulationStage.GPU, start: 70, end: 100 },
];

export const CLASSICAL_INTERSECTIONS = 64;
export const QUANTUM_INTERSECTIONS = 22;

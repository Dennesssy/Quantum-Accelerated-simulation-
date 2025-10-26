
export enum SimulationState {
  Idle = 'IDLE',
  Running = 'RUNNING',
  Finished = 'FINISHED',
}

export enum SimulationStage {
  AQCS = 'AQCS',
  Readout = 'READOUT',
  GPU = 'GPU',
  Done = 'DONE',
}

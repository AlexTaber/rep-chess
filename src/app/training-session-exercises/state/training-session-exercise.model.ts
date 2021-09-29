import { ID } from '@datorama/akita';

export interface TrainingSessionExercise {
  id: ID;
  trainingSessionId: ID;
  exerciseId: ID;
}

export function createTrainingSessionExercise(params: Partial<TrainingSessionExercise>) {
  return {

  } as TrainingSessionExercise;
}

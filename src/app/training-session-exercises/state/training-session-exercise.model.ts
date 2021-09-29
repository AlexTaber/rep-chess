import { ID } from '@datorama/akita';

export interface TrainingSessionExercise {
  id: ID;
  exerciseId: ID;
  attemptIds: ID[];
}

export function createTrainingSessionExercise(params: Partial<TrainingSessionExercise>) {
  return {

  } as TrainingSessionExercise;
}

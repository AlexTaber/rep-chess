import { ID } from '@datorama/akita';

export interface TrainingSessionExerciseAttempt {
  id: ID;
  trainingSessionExerciseId: ID;
  status: TrainingSessionExerciseAttemptStatus;
}

export type TrainingSessionExerciseAttemptStatus = "pass" | "fail" | "pending";

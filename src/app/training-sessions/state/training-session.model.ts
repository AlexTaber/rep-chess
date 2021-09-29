import { ID } from '@datorama/akita';
import { TrainingSessionExercise } from 'src/app/training-session-exercises/state';

export type TimeInSeconds = number;

export interface TrainingSession {
  id: ID;
  packId: ID;
  time: TimeInSeconds;
  exercises: TrainingSessionExercise[];
  config: TrainingSessionConfig;
}

export interface TrainingSessionConfig {
  targetTime?: TimeInSeconds;
}

import { ID } from '@datorama/akita';
import { ExerciseCollection } from 'src/app/exercises/state';

export type TimeInSeconds = number;

export interface TrainingSession extends ExerciseCollection {
  id: ID;
  packId: ID;
  config: TrainingSessionConfig;
  startTime: Date;
}

export interface TrainingSessionConfig {
  targetTime?: TimeInSeconds;
}

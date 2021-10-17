import { ID } from '@datorama/akita';
import { ExerciseCollection } from 'src/app/exercises/state';

export type TimeInSeconds = number;

export interface TrainingSession extends ExerciseCollection {
  config: TrainingSessionConfig;
}

export interface TrainingSessionConfig {
  targetTime?: TimeInSeconds;
}

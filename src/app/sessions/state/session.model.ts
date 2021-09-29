import { ID } from '@datorama/akita';
import { SessionExercise } from 'src/app/state';

export type TimeInSeconds = number;

export interface Session {
  id: ID;
  packId: ID;
  time: TimeInSeconds;
  exercises: SessionExercise[];
  config: SessionConfig;
}

export interface SessionConfig {
  targetTime?: TimeInSeconds;
}

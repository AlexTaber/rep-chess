import { guid, ID } from '@datorama/akita';
import { ExerciseCollection, ExerciseResults } from 'src/app/exercises/state';

export interface PackCycle extends ExerciseCollection {
  results: PackCycleResults;
}

export interface PackCycleResults extends ExerciseResults {
  complete: boolean;
}

export function createPackCycle(packId: ID) {
  return {
    id: guid(),
    packId,
    attempts: [],
    startTime: new Date(),
    results: {
      successes: 0,
      failures: 0,
      time: 0,
      complete: false,
    },
  } as PackCycle;
}

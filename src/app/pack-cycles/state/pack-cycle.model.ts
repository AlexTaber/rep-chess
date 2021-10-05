import { guid, ID } from '@datorama/akita';
import { ExerciseCollection } from 'src/app/exercises/state';

export interface PackCycle extends ExerciseCollection {
  id: ID;
  packId: ID;
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
    },
  } as PackCycle;
}

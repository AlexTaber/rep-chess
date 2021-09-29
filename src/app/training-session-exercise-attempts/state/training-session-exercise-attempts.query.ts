import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TrainingSessionExerciseAttemptsStore, TrainingSessionExerciseAttemptsState } from './training-session-exercise-attempts.store';

@Injectable({ providedIn: 'root' })
export class TrainingSessionExerciseAttemptsQuery extends QueryEntity<TrainingSessionExerciseAttemptsState> {

  constructor(protected store: TrainingSessionExerciseAttemptsStore) {
    super(store);
  }

}

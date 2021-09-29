import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { TrainingSessionExerciseAttempt } from './training-session-exercise-attempt.model';

export interface TrainingSessionExerciseAttemptsState extends EntityState<TrainingSessionExerciseAttempt> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'training-session-exercise-attempts'
})
export class TrainingSessionExerciseAttemptsStore extends EntityStore<TrainingSessionExerciseAttemptsState> {

  constructor() {
    super();
  }

}

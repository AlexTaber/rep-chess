import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TrainingSessionExercisesStore, TrainingSessionExercisesState } from './training-session-exercises.store';

@Injectable({ providedIn: 'root' })
export class TrainingSessionExercisesQuery extends QueryEntity<TrainingSessionExercisesState> {

  constructor(protected store: TrainingSessionExercisesStore) {
    super(store);
  }

}

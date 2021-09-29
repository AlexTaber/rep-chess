import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { TrainingSessionExercise } from '.';
import { TrainingSessionExercisesStore, TrainingSessionExercisesState } from './training-session-exercises.store';

@Injectable({ providedIn: 'root' })
export class TrainingSessionExercisesQuery extends QueryEntity<TrainingSessionExercisesState> {
  public active$ = this.selectActive() as Observable<TrainingSessionExercise>;

  constructor(protected store: TrainingSessionExercisesStore) {
    super(store);
  }
}

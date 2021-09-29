import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SessionExercisesStore, SessionExercisesState } from './session-exercises.store';

@Injectable({ providedIn: 'root' })
export class SessionExercisesQuery extends QueryEntity<SessionExercisesState> {

  constructor(protected store: SessionExercisesStore) {
    super(store);
  }

}

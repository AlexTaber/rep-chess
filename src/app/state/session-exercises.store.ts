import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { SessionExercise } from './session-exercise.model';

export interface SessionExercisesState extends EntityState<SessionExercise> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'session-exercises'
})
export class SessionExercisesStore extends EntityStore<SessionExercisesState> {

  constructor() {
    super();
  }

}

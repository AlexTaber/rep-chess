import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { TrainingSessionExercise } from './training-session-exercise.model';

export interface TrainingSessionExercisesState extends EntityState<TrainingSessionExercise> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'training-session-exercises'
})
export class TrainingSessionExercisesStore extends EntityStore<TrainingSessionExercisesState> {

  constructor() {
    super();
  }

}

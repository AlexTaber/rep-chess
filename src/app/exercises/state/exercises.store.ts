import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Exercise } from './exercise.model';

export interface ExercisesState extends EntityState<Exercise> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'exercises'
})
export class ExercisesStore extends EntityStore<ExercisesState> {

  constructor() {
    super();
  }

}

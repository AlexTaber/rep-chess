import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ExercisesStore, ExercisesState } from './exercises.store';

@Injectable({ providedIn: 'root' })
export class ExercisesQuery extends QueryEntity<ExercisesState> {
  public exercises$ = this.selectAll();

  constructor(protected store: ExercisesStore) {
    super(store);
  }

}

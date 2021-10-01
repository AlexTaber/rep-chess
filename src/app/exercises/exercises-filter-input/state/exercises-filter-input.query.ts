import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ExercisesFilterInputStore, ExercisesFilterInputState } from './exercises-filter-input.store';

@Injectable({ providedIn: 'root' })
export class ExercisesFilterInputQuery extends Query<ExercisesFilterInputState> {
  public payload$ = this.select(({ payload }) => payload);

  constructor(protected store: ExercisesFilterInputStore) {
    super(store);
  }

}

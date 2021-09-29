import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ExerciseStore, ExerciseState } from './exercise.store';

@Injectable({ providedIn: 'root' })
export class ExerciseQuery extends Query<ExerciseState> {
  constructor(protected store: ExerciseStore) {
    super(store);
  }
}

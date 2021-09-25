import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Exercise, ExerciseData } from '.';
import { ExercisesStore, ExercisesState } from './exercises.store';

@Injectable({ providedIn: 'root' })
export class ExercisesQuery extends QueryEntity<ExercisesState> {
  public exercises$ = this.selectAll();
  public activeExercise$ = this.selectActive() as Observable<Exercise<ExerciseData> | undefined>;

  constructor(protected store: ExercisesStore) {
    super(store);
  }

}

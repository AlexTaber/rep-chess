import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { shuffle } from 'lodash';
import { Observable, of } from 'rxjs';
import { MockedExercisesRepository } from 'src/app/shared/utils/mocked-exercises.repository';
import { Exercise, ExerciseFilter, ExercisesQuery } from '.';
import { ExercisesStore } from './exercises.store';

@Injectable({ providedIn: 'root' })
export class ExercisesService {
  constructor(
    private exercisesStore: ExercisesStore,
    private exercisesQuery: ExercisesQuery,
    private repo: MockedExercisesRepository,
  ) {}

  public fetch(filter: ExerciseFilter): Observable<Exercise[]> {
    const exercises = this.repo.getMany(filter);
    this.exercisesStore.set(exercises);
    return of(exercises);
  }

  public set(exercises: Exercise[]): void {
    this.exercisesStore.set(exercises);
  }

  public setActive(id: ID): void {
    this.exercisesStore.setActive(id);
  }

  public shuffle(): void {
    this.exercisesStore.set(shuffle(this.exercisesQuery.getAll()));
  }
}

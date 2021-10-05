import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { shuffle } from 'lodash';
import { Observable, of } from 'rxjs';
import { MockedExercisesRepo } from 'src/app/shared/mock-repos/mocked-exercises.repository';
import { Exercise, ExerciseFilter, ExercisesQuery } from '.';
import { ExercisesStore } from './exercises.store';

@Injectable({ providedIn: 'root' })
export class ExercisesService {
  constructor(
    private exercisesStore: ExercisesStore,
    private exercisesQuery: ExercisesQuery,
    private repo: MockedExercisesRepo,
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

  public setNextActive(): void {
    this.exercisesStore.setActive({ next: true });
  }

  public shuffle(): void {
    this.exercisesStore.set(shuffle(this.exercisesQuery.getAll()));
  }
}

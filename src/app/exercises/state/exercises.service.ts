import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { Exercise } from '.';
import { ExercisesStore } from './exercises.store';

@Injectable({ providedIn: 'root' })
export class ExercisesService {
  constructor(
    private exercisesStore: ExercisesStore,
  ) {}

  public set(exercises: Exercise[]): void {
    this.exercisesStore.set(exercises);
  }

  public setActive(id: ID): void {
    this.exercisesStore.setActive(id);
  }

  public setNextActive(): void {
    this.exercisesStore.setActive({ next: true });
  }
}

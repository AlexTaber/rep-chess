import { Injectable } from '@angular/core';
import { Exercise } from '.';
import { ExercisesStore } from './exercises.store';

@Injectable({ providedIn: 'root' })
export class ExercisesService {
  constructor(private exercisesStore: ExercisesStore) {
  }

  public set(exercises: Exercise[]): void {
    this.exercisesStore.set(exercises);
  }
}

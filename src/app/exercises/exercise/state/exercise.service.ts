import { Injectable } from '@angular/core';
import { ExerciseStore } from './exercise.store';

@Injectable({ providedIn: 'root' })
export class ExerciseService {

  constructor(private exerciseStore: ExerciseStore) {}

  public incrementMoveIndex(): void {
    const currentMoveIndex = this.exerciseStore.getValue().moveIndex;
    this.exerciseStore.update({ moveIndex: currentMoveIndex + 1 });
  }

  public setShowingSolution(showingSolution: boolean): void {
    this.exerciseStore.update({ showingSolution });
  }

  public reset(): void {
    this.exerciseStore.reset();
  }
}

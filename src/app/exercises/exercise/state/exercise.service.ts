import { Injectable } from '@angular/core';
import { ExerciseAttemptStatus } from '../../state';
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

  public setStatus(status: ExerciseAttemptStatus): void {
    this.exerciseStore.update({ status });
  }

  public setAttemptStartTime(attemptStartTime: Date): void {
    this.exerciseStore.update({ attemptStartTime });
  }

  public reset(): void {
    this.exerciseStore.reset();
  }
}

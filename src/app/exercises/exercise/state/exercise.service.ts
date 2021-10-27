import { Injectable } from '@angular/core';
import { dateDifference } from '../../../shared/utils/date-difference';
import { ExerciseAttemptStatus } from '../../state';
import { ExerciseQuery } from './exercise.query';
import { ExerciseStore } from './exercise.store';

@Injectable({ providedIn: 'root' })
export class ExerciseService {

  constructor(
    private exerciseStore: ExerciseStore,
    private exerciseQuery: ExerciseQuery,
  ) {}

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

  public pause(): void {
    this.exerciseStore.update({ pauseTime: new Date() });
  }

  public unpause(): void {
    const pauseTime = this.exerciseQuery.getValue().pauseTime;
    const time = dateDifference(pauseTime || new Date(), new Date());
    this.exerciseStore.update({
      totalPauseTime: this.exerciseStore.getValue().totalPauseTime + time,
      pauseTime: undefined,
    });
  }
}

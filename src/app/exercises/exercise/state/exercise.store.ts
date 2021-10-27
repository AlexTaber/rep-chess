import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { MoveChange } from 'ngx-chess-board';
import { TimeInSeconds } from '../../../training-sessions/state';
import { ExerciseAttemptStatus } from '../../state';

export interface ExerciseState {
  moveIndex: number;
  showingSolution: boolean;
  status: ExerciseAttemptStatus;
  attemptStartTime: Date;
  totalPauseTime: TimeInSeconds;
  pauseTime?: Date;
}

export interface MoveChangeEvent extends MoveChange {
  move: string;
}

export function createInitialState(): ExerciseState {
  return {
    moveIndex: 0,
    showingSolution: false,
    status: "pending",
    attemptStartTime: new Date(),
    totalPauseTime: 0,
    pauseTime: undefined,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'exercise', resettable: true })
export class ExerciseStore extends Store<ExerciseState> {

  constructor() {
    super(createInitialState());
  }
}

import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { NgxChessBoardView } from 'ngx-chess-board';

export interface ExerciseState {
  moveIndex: number;
  board?: NgxChessBoardView;
}

export function createInitialState(): ExerciseState {
  return {
    moveIndex: 0,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'exercise', resettable: true })
export class ExerciseStore extends Store<ExerciseState> {

  constructor() {
    super(createInitialState());
  }
}

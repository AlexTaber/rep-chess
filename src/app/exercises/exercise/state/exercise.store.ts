import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface ExerciseState {
  moveIndex: number;
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

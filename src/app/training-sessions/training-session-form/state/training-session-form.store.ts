import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface TrainingSessionFormState {
  payload: TrainingSessionFormPayload;
}

export interface TrainingSessionFormPayload {
  unlimitedMode: boolean;
  shuffle: boolean;
  minutes: number;
  seconds: number;
}

export function createInitialState(): TrainingSessionFormState {
  return {
    payload: {
      unlimitedMode: false,
      shuffle: false,
      minutes: 20,
      seconds: 0,
    }
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'sessions-form' })
export class TrainingSessionFormStore extends Store<TrainingSessionFormState> {

  constructor() {
    super(createInitialState());
  }
}

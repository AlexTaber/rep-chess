import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface SessionFormState {
  payload: SessionFormPayload;
}

export interface SessionFormPayload {
  unlimitedMode: boolean;
  minutes: number;
  seconds: number;
}

export function createInitialState(): SessionFormState {
  return {
    payload: {
      unlimitedMode: false,
      minutes: 20,
      seconds: 0,
    }
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'sessions-form' })
export class SessionFormStore extends Store<SessionFormState> {

  constructor() {
    super(createInitialState());
  }
}

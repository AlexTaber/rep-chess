import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { ExerciseRatingRange, ExerciseTheme } from 'src/app/exercises/state';

export interface PacksFormState {
  payload: PacksFormPayload;
}

export interface PacksFormPayload {
  themes: ExerciseTheme[];
  ratingRange: ExerciseRatingRange;
}

export function createInitialState(): PacksFormState {
  return {
    payload: {
      themes: [],
      ratingRange: {
        low: 1400,
        high: 1600,
      }
    }
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'packs-form' })
export class PacksFormStore extends Store<PacksFormState> {

  constructor() {
    super(createInitialState());
  }

}

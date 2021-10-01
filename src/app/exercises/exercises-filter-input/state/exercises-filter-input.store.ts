import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { ExerciseRatingRange, ExerciseTheme } from '../../state';

export interface ExercisesFilterInputState {
  payload: ExercisesFilterInputPayload;
}

export interface ExercisesFilterInputPayload {
  ratingRange: ExerciseRatingRange;
  themes: ExerciseTheme[]
}

export function createInitialState(): ExercisesFilterInputState {
  return {
    payload: {
      ratingRange: {
        low: 1400,
        high: 1600,
      },
      themes: [],
    }
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'exercises-filter-input' })
export class ExercisesFilterInputStore extends Store<ExercisesFilterInputState> {

  constructor() {
    super(createInitialState());
  }

}

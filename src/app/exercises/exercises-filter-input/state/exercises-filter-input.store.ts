import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { ExerciseRatingRange, ExerciseTheme } from '../../state';

export interface ExercisesFilterInputState {
  payload: ExercisesFilterInputPayload;
}

export interface ExercisesFilterInputPayload {
  ratingRange: ExerciseRatingRange;
  themes: ExerciseTheme[]
  limit: number;
}

export function createInitialState(): ExercisesFilterInputState {
  return {
    payload: {
      ratingRange: {
        low: 1400,
        high: 1600,
      },
      themes: [],
      limit: 500,
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

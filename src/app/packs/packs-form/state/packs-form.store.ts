import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { ExercisesFilterInputPayload } from 'src/app/exercises/exercises-filter-input/state/exercises-filter-input.store';
import { Exercise } from 'src/app/exercises/state';

export interface PacksFormState {
  payload: PacksFormPayload;
}

export interface PacksFormPayload {
  name: string;
  filter: ExercisesFilterInputPayload;
}

export function createInitialState(): PacksFormState {
  return {
    payload: {
      name: "",
      filter: {
        ratingRange: {
          low: 1400,
          high: 1600,
        },
        themes: [],
      },
    },
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'packs-form' })
export class PacksFormStore extends Store<PacksFormState> {

  constructor() {
    super(createInitialState());
  }

}

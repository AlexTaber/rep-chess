import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { TrainingSessionFormStore, TrainingSessionFormState } from './training-session-form.store';

@Injectable({ providedIn: 'root' })
export class TrainingSessionFormQuery extends Query<TrainingSessionFormState> {
  public payload$ = this.select(state => state.payload);

  constructor(protected store: TrainingSessionFormStore) {
    super(store);
  }
}

import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TrainingSessionsStore, TrainingSessionsState } from './training-sessions.store';

@Injectable({ providedIn: 'root' })
export class TrainingSessionsQuery extends QueryEntity<TrainingSessionsState> {

  constructor(protected store: TrainingSessionsStore) {
    super(store);
  }

}

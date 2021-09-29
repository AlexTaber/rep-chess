import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { TrainingSession } from './training-session.model';

export interface TrainingSessionsState extends EntityState<TrainingSession> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'training-sessions'
})
export class TrainingSessionsStore extends EntityStore<TrainingSessionsState> {

  constructor() {
    super();
  }

}

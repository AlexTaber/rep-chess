import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Session } from './session.model';

export interface SessionsState extends EntityState<Session> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'sessions'
})
export class SessionsStore extends EntityStore<SessionsState> {

  constructor() {
    super();
  }

}

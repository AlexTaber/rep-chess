import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SessionsStore, SessionsState } from './sessions.store';

@Injectable({ providedIn: 'root' })
export class SessionsQuery extends QueryEntity<SessionsState> {

  constructor(protected store: SessionsStore) {
    super(store);
  }

}

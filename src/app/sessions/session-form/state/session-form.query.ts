import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SessionFormStore, SessionFormState } from './session-form.store';

@Injectable({ providedIn: 'root' })
export class SessionFormQuery extends Query<SessionFormState> {
  public payload$ = this.select(state => state.payload);

  constructor(protected store: SessionFormStore) {
    super(store);
  }
}

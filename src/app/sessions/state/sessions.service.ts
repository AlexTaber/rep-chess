import { Injectable } from '@angular/core';
import { guid } from '@datorama/akita';
import { Observable, of } from 'rxjs';
import { Session } from '.';
import { SessionsStore } from './sessions.store';

@Injectable({ providedIn: 'root' })
export class SessionsService {
  constructor(private sessionsStore: SessionsStore) {
  }

  public create(payload: Partial<Session>): Observable<Session> {
    const session = { id: guid(), ...payload } as Session;
    this.sessionsStore.add(session);
    return of(session);
  }
}

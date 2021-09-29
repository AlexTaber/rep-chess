import { Injectable } from '@angular/core';
import { guid, ID } from '@datorama/akita';
import { Observable, of } from 'rxjs';
import { TrainingSession, TrainingSessionResults } from '.';
import { TrainingSessionsStore } from './training-sessions.store';

@Injectable({ providedIn: 'root' })
export class TrainingSessionsService {
  constructor(private sessionsStore: TrainingSessionsStore) {
  }

  public create(payload: Partial<TrainingSession>): Observable<TrainingSession> {
    const session = { id: guid(), startTime: new Date(), ...payload } as TrainingSession;
    this.sessionsStore.add(session);
    return of(session);
  }

  public setActive(id: ID): void {
    this.sessionsStore.setActive(id);
  }

  public setResults(results: TrainingSessionResults | undefined): void {
    this.sessionsStore.updateActive({ results });
  }
}

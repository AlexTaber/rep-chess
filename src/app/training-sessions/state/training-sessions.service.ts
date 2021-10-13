import { Injectable } from '@angular/core';
import { arrayAdd, guid, ID } from '@datorama/akita';
import { Observable, of } from 'rxjs';
import { ExerciseAttempt, ExerciseResults } from 'src/app/exercises/state';
import { TrainingSession, TrainingSessionsQuery } from '.';
import { TrainingSessionsStore } from './training-sessions.store';

@Injectable({ providedIn: 'root' })
export class TrainingSessionsService {
  private get active(): TrainingSession | undefined {
    return this.sessionsQuery.getActive() as TrainingSession | undefined;
  }

  constructor(
    private sessionsStore: TrainingSessionsStore,
    private sessionsQuery: TrainingSessionsQuery,
  ) {}

  public create(payload: Partial<TrainingSession>): Observable<TrainingSession> {
    const session = { id: guid(), startTime: new Date(), ...payload } as TrainingSession;
    this.sessionsStore.add(session);
    return of(session);
  }

  public setActive(id: ID): void {
    this.sessionsStore.setActive(id);
  }

  public setResults(results: ExerciseResults | undefined): void {
    this.sessionsStore.updateActive({ results });
  }

  public addAttempt(attempt: ExerciseAttempt): void {
    const currentAttempts = this.active?.attempts || [];
    const attempts = arrayAdd(currentAttempts, attempt);
    this.sessionsStore.updateActive({ attempts });
  }
}

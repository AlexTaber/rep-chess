import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { TrainingSessionExercisesQuery } from 'src/app/training-session-exercises/state';
import { TrainingSession, TrainingSessionResults } from '.';
import { TrainingSessionsStore, TrainingSessionsState } from './training-sessions.store';

@Injectable({ providedIn: 'root' })
export class TrainingSessionsQuery extends QueryEntity<TrainingSessionsState> {
  public active$ = this.selectActive() as Observable<TrainingSession | undefined>;

  constructor(
    protected store: TrainingSessionsStore,
    private sessionExercisesQuery: TrainingSessionExercisesQuery,
  ) {
    super(store);
  }

  public getResults(): TrainingSessionResults | undefined {
    const session = this.getActive() as TrainingSession | undefined;
    return session ? this.getResultsFromSession(session) : undefined;
  }

  private getResultsFromSession(session: TrainingSession): TrainingSessionResults {
    return {
      time: session.time,
      ...this.getResultsCountsFromSession(session),
    } as TrainingSessionResults;
  }

  private getResultsCountsFromSession(session: TrainingSession): Partial<TrainingSessionResults> {
    return this.sessionExercisesQuery.getResultsCountFromSession(session);
  }
}

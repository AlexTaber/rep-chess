import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { PacksQuery } from 'src/app/packs/state';
import { TrainingSessionExercisesQuery } from 'src/app/training-session-exercises/state';
import { TimeInSeconds, TrainingSession, TrainingSessionResults } from '.';
import { TrainingSessionsStore, TrainingSessionsState } from './training-sessions.store';

@Injectable({ providedIn: 'root' })
export class TrainingSessionsQuery extends QueryEntity<TrainingSessionsState> {
  public all$ = this.selectAll();
  public active$ = this.selectActive() as Observable<TrainingSession | undefined>;
  public activePackSessions$ = this.selectAll({
    filterBy: session => session.packId === this.packsQuery.getActiveId()
  });

  constructor(
    protected store: TrainingSessionsStore,
    private packsQuery: PacksQuery,
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
      time: this.getSessionTime(session),
      ...this.getResultsCountsFromSession(session),
    } as TrainingSessionResults;
  }

  private getSessionTime(session: TrainingSession): TimeInSeconds {
    return Math.ceil((new Date().getTime() - session.startTime.getTime()) / 1000);
  }

  private getResultsCountsFromSession(session: TrainingSession): Partial<TrainingSessionResults> {
    return this.sessionExercisesQuery.getResultsCountFromSession(session);
  }
}

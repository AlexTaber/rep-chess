import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { ExerciseResults } from 'src/app/exercises/state';
import { PacksQuery } from 'src/app/packs/state';
import { TimeInSeconds, TrainingSession } from '.';
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
  ) {
    super(store);
  }

  public getResults(): ExerciseResults | undefined {
    const session = this.getActive() as TrainingSession | undefined;
    return session ? this.getResultsFromSession(session) : undefined;
  }

  private getResultsFromSession(session: TrainingSession): ExerciseResults {
    return {
      time: this.getSessionTime(session),
      ...this.getResultsCountsFromSession(session),
    } as ExerciseResults;
  }

  private getSessionTime(session: TrainingSession): TimeInSeconds {
    return Math.ceil((new Date().getTime() - session.startTime.getTime()) / 1000);
  }

  private getResultsCountsFromSession(session: TrainingSession): Partial<ExerciseResults> {
    return {
      successes: session.attempts.filter(attempt => attempt.status === "pass").length,
      failures: session.attempts.filter(attempt => attempt.status === "fail").length,
      time: session.attempts.reduce((time, attempt) => time + attempt.time, 0),
    }
  }
}

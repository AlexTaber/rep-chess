import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { ExerciseResults } from 'src/app/exercises/state';
import { getResultsFromExerciseCollection } from 'src/app/exercises/state/exercises.utils';
import { PacksQuery } from 'src/app/packs/state';
import { TrainingSession } from '.';
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
    return session ? getResultsFromExerciseCollection(session) : undefined;
  }
}

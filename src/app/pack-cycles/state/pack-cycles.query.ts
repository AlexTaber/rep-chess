import { Injectable } from '@angular/core';
import { ID, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { getResultsFromExerciseCollection } from 'src/app/exercises/state/exercises.utils';
import { PacksQuery } from 'src/app/packs/state';
import { PackCycle, PackCycleResults } from '.';
import { PackCyclesStore, PackCyclesState } from './pack-cycles.store';

@Injectable({ providedIn: 'root' })
export class PackCyclesQuery extends QueryEntity<PackCyclesState> {
  public all$ = this.selectAll();

  public activeCompleteCycles$ = this.selectAll({
    filterBy: cycle => cycle.packId === this.packsQuery.getActiveId() && cycle.results.complete
  });

  public completedCycles$ = this.selectAll({
    filterBy: cycle => cycle.results.complete
  });


  constructor(
    protected store: PackCyclesStore,
    private packsQuery: PacksQuery,
  ) {
    super(store);
  }

  public getResults(): PackCycleResults | undefined {
    const cycle = this.getActiveCycle();
    return cycle ? this.getResultsFromCycle(cycle) : undefined;
  }

  public getActiveCycle(): PackCycle | undefined {
    return this.getActive() as PackCycle | undefined;
  }

  public selectCompletedByPackId(packId: ID): Observable<PackCycle[]> {
    return this.selectAll({
      filterBy: cycle => cycle.packId === packId && cycle.results.complete,
    });
  }

  public selectOngoingByPackId(packId: ID): Observable<PackCycle | undefined> {
    return this.selectEntity((cycle: PackCycle) => cycle.packId === packId && !cycle.results.complete);
  }

  public getOngoingCycle(packId: ID): PackCycle | undefined {
    return this.getAll().find(cycle => cycle.packId === packId && !cycle.results.complete);
  }

  private getResultsFromCycle(cycle: PackCycle): PackCycleResults {
    const pack = this.packsQuery.getEntity(cycle.packId);
    return {
      ...getResultsFromExerciseCollection(cycle),
      complete: cycle.attempts.length >= (pack?.exercises.length || 0),
    }
  }
}

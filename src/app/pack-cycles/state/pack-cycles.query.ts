import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { getResultsFromExerciseCollection } from 'src/app/exercises/state/exercises.utils';
import { PacksQuery } from 'src/app/packs/state';
import { PackCycle, PackCycleResults } from '.';
import { PackCyclesStore, PackCyclesState } from './pack-cycles.store';

@Injectable({ providedIn: 'root' })
export class PackCyclesQuery extends QueryEntity<PackCyclesState> {

  constructor(
    protected store: PackCyclesStore,
    private packsQuery: PacksQuery,
  ) {
    super(store);
  }

  public getResults(): PackCycleResults | undefined {
    const cycle = this.getActive() as PackCycle | undefined;
    return cycle ? this.getResultsFromCycle(cycle) : undefined;
  }

  private getResultsFromCycle(cycle: PackCycle): PackCycleResults {
    const pack = this.packsQuery.getEntity(cycle.packId);
    return {
      ...getResultsFromExerciseCollection(cycle),
      complete: cycle.attempts.length >= (pack?.exercises.length || 0),
    }
  }
}

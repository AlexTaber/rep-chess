import { Injectable } from '@angular/core';
import { arrayAdd, arrayUpdate, ID } from '@datorama/akita';
import { Observable, of } from 'rxjs';
import { ExerciseAttempt } from 'src/app/exercises/state';
import { createPackCycle, PackCycle, PackCycleResults, PackCyclesQuery } from '.';
import { PackCyclesStore } from './pack-cycles.store';

@Injectable({ providedIn: 'root' })
export class PackCyclesService {
  private get active(): PackCycle | undefined {
    return this.cylcesQuery.getActive() as PackCycle | undefined;
  }

  constructor(
    private packCyclesStore: PackCyclesStore,
    private cylcesQuery: PackCyclesQuery,
  ) {}

  public create(packId: ID): Observable<PackCycle> {
    const cycle = createPackCycle(packId);
    this.packCyclesStore.add(cycle);
    return of(cycle);
  }

  public setActive(id: ID): void {
    this.packCyclesStore.setActive(id);
  }

  public addAttempt(attempt: ExerciseAttempt): void {
    const existingAttempt = this.cylcesQuery.getActiveCycle()?.attempts.find(checkedAttempt => (
      checkedAttempt.status === "pending" && checkedAttempt.exerciseId === attempt.exerciseId
    ));

    existingAttempt ? this.updateExistingAttempt(existingAttempt, attempt) : this.addNewAttempt(attempt);
  }

  public setResults(results: PackCycleResults | undefined): void {
    this.packCyclesStore.updateActive({ results });
  }

  private addNewAttempt(attempt: ExerciseAttempt): void {
    const currentAttempts = this.active?.attempts || [];
    const attempts = arrayAdd(currentAttempts, attempt);
    this.packCyclesStore.updateActive({ attempts });
  }

  private updateExistingAttempt(existingAttempt: ExerciseAttempt, newAttempt: ExerciseAttempt): void {
    const attempts = arrayUpdate(this.cylcesQuery.getActiveCycle()?.attempts || [], existingAttempt.id, {
      id: newAttempt.id,
      time: existingAttempt.time + newAttempt.time,
      status: newAttempt.status,
    });

    this.packCyclesStore.updateActive({ attempts });
  }
}

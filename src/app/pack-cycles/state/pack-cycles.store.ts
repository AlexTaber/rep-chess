import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { PackCycle } from './pack-cycle.model';

export interface PackCyclesState extends EntityState<PackCycle> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'pack-cycles'
})
export class PackCyclesStore extends EntityStore<PackCyclesState> {

  constructor() {
    super();
  }

}

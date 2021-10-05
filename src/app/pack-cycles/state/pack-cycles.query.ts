import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { PackCyclesStore, PackCyclesState } from './pack-cycles.store';

@Injectable({ providedIn: 'root' })
export class PackCyclesQuery extends QueryEntity<PackCyclesState> {

  constructor(protected store: PackCyclesStore) {
    super(store);
  }

}

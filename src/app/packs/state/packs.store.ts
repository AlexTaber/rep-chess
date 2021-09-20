import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Pack } from './pack.model';

export interface PacksState extends EntityState<Pack> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'packs'
})
export class PacksStore extends EntityStore<PacksState> {

  constructor() {
    super();
  }

}

import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { MOCK_PACKS } from '.';
import { PacksStore } from './packs.store';

@Injectable({ providedIn: 'root' })
export class PacksService {

  constructor(
    private packsStore: PacksStore) {}

  public fetch(): void {
    this.packsStore.set(MOCK_PACKS);
  }

  public setActive(id: ID): void {
    this.packsStore.setActive(id);
  }
}

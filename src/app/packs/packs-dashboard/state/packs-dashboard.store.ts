import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface PacksDashboardState {
  showCreatePackModal: boolean;
}

export function createInitialState(): PacksDashboardState {
  return {
    showCreatePackModal: false,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'packs-dashboard' })
export class PacksDashboardStore extends Store<PacksDashboardState> {

  constructor() {
    super(createInitialState());
  }

}

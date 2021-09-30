import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { PacksDashboardStore, PacksDashboardState } from './packs-dashboard.store';

@Injectable({ providedIn: 'root' })
export class PacksDashboardQuery extends Query<PacksDashboardState> {
  public showCreatePackModal$ = this.select(({ showCreatePackModal }) => showCreatePackModal);

  constructor(protected store: PacksDashboardStore) {
    super(store);
  }
}

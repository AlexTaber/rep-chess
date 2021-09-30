import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PacksDashboardStore } from './packs-dashboard.store';

@Injectable({ providedIn: 'root' })
export class PacksDashboardService {

  constructor(private packsDashboardStore: PacksDashboardStore, private http: HttpClient) {
  }

  public setShowCreatePackModal(showCreatePackModal: boolean): void {
    this.packsDashboardStore.update({ showCreatePackModal });
  }
}

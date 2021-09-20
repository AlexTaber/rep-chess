import { Injectable } from '@angular/core';
import { NavBarStore } from './nav-bar.store';

@Injectable({ providedIn: 'root' })
export class NavBarService {

  constructor(private navBarStore: NavBarStore) {
  }

  public toggleOpen(): void {
    this.navBarStore.update({ open: !this.navBarStore.getValue().open });
  }
}

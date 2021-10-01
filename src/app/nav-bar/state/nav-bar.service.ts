import { Injectable } from '@angular/core';
import { NavBarStore } from './nav-bar.store';

@Injectable({ providedIn: 'root' })
export class NavBarService {

  constructor(private navBarStore: NavBarStore) {
  }

  public toggleOpen(): void {
    this.setOpen(!this.navBarStore.getValue().open );
  }

  public setOpen(open: boolean): void {
    this.navBarStore.update({ open });
  }
}

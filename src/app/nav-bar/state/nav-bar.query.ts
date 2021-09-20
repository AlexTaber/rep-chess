import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { NavBarStore, NavBarState } from './nav-bar.store';

@Injectable({ providedIn: 'root' })
export class NavBarQuery extends Query<NavBarState> {
  public open$ = this.select("open");

  constructor(protected store: NavBarStore) {
    super(store);
  }
}

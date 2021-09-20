import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface NavBarState {
  open: boolean;
}

export function createInitialState(): NavBarState {
  return {
    open: false,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'nav-bar' })
export class NavBarStore extends Store<NavBarState> {

  constructor() {
    super(createInitialState());
  }

}

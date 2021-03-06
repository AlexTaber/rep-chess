import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Pack } from '.';
import { PacksStore, PacksState } from './packs.store';

@Injectable({ providedIn: 'root' })
export class PacksQuery extends QueryEntity<PacksState> {
  public subscribedPacks$ = this.selectAll({
    filterBy: pack => pack.subscribed
  });

  public unsubscribedPacks$ = this.selectAll({
    filterBy: pack =>  !pack.subscribed
  });

  public activePack$ = this.selectActive() as Observable<Pack>;

  constructor(protected store: PacksStore) {
    super(store);
  }

  public getActivePack(): Pack | undefined {
    return this.getActive() as Pack | undefined;
  }
}

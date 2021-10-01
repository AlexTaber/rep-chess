import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { PacksFormStore, PacksFormState } from './packs-form.store';

@Injectable({ providedIn: 'root' })
export class PacksFormQuery extends Query<PacksFormState> {
  public payload$ = this.select(({ payload }) => payload);

  constructor(protected store: PacksFormStore) {
    super(store);
  }

}

import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { PacksFormStore, PacksFormState } from './packs-form.store';

@Injectable({ providedIn: 'root' })
export class PacksFormQuery extends Query<PacksFormState> {

  constructor(protected store: PacksFormStore) {
    super(store);
  }

}

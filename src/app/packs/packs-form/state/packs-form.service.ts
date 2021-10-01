import { Injectable } from '@angular/core';
import { PacksFormPayload, PacksFormStore } from './packs-form.store';

@Injectable({ providedIn: 'root' })
export class PacksFormService {

  constructor(private packsFormStore: PacksFormStore) {
  }

  public updatePayload(diff: Partial<PacksFormPayload>): void {
    const payload = { ...this.packsFormStore.getValue().payload, ...diff };
    this.packsFormStore.update({ payload });
  }
}

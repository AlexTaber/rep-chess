import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { PacksFormStore } from './packs-form.store';

@Injectable({ providedIn: 'root' })
export class PacksFormService {

  constructor(private packsFormStore: PacksFormStore, private http: HttpClient) {
  }

  get() {
    return this.http.get('').pipe(tap(entities => this.packsFormStore.update(entities)));
  }

}

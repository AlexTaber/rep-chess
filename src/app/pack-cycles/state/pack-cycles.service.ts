import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { PackCyclesStore } from './pack-cycles.store';

@Injectable({ providedIn: 'root' })
export class PackCyclesService {

  constructor(private packCyclesStore: PackCyclesStore, private http: HttpClient) {
  }

  get() {
    return this.http.get('').pipe(tap(entities => this.packCyclesStore.set(entities)));
  }

}

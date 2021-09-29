import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SessionExercisesStore } from './session-exercises.store';

@Injectable({ providedIn: 'root' })
export class SessionExercisesService {

  constructor(private sessionExercisesStore: SessionExercisesStore) {
  }
}

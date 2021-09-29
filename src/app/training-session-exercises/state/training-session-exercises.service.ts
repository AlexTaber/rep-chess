import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TrainingSessionExercisesStore } from './training-session-exercises.store';

@Injectable({ providedIn: 'root' })
export class TrainingSessionExercisesService {

  constructor(private sessionExercisesStore: TrainingSessionExercisesStore) {
  }
}

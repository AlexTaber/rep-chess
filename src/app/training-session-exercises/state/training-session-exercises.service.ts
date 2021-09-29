import { Injectable } from '@angular/core';
import { guid, ID } from '@datorama/akita';
import { Observable, of } from 'rxjs';
import { TrainingSessionExercise } from '.';
import { TrainingSessionExercisesStore } from './training-session-exercises.store';

@Injectable({ providedIn: 'root' })
export class TrainingSessionExercisesService {

  constructor(private sessionExercisesStore: TrainingSessionExercisesStore) {}

  public create(payload: Partial<TrainingSessionExercise>): Observable<TrainingSessionExercise> {
    const exercise = {
      id: guid(),
      ...payload,
    } as TrainingSessionExercise;
    this.sessionExercisesStore.add(exercise);
    return of(exercise);
  }

  public setActive(id: ID): void {
    this.sessionExercisesStore.setActive(id);
  }

  public setNextActive(): void {
    this.sessionExercisesStore.setActive({ next: true });
  }
}

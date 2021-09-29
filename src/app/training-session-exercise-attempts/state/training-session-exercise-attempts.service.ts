import { Injectable } from '@angular/core';
import { guid, ID } from '@datorama/akita';
import { Observable, of } from 'rxjs';
import { TrainingSessionExerciseAttempt, TrainingSessionExerciseAttemptStatus } from '.';
import { TrainingSessionExerciseAttemptsStore } from './training-session-exercise-attempts.store';

@Injectable({ providedIn: 'root' })
export class TrainingSessionExerciseAttemptsService {

  constructor(private trainingSessionExerciseAttemptsStore: TrainingSessionExerciseAttemptsStore) {
  }

  public createAndSetActive(trainingSessionExerciseId: ID): Observable<TrainingSessionExerciseAttempt> {
    const attempt = {
      id: guid(),
      trainingSessionExerciseId,
      status: "pending" as TrainingSessionExerciseAttemptStatus,
    };

    this.trainingSessionExerciseAttemptsStore.add(attempt);
    this.setActive(attempt.id);
    return of(attempt);
  }

  public setActive(id: ID): void {
    this.trainingSessionExerciseAttemptsStore.setActive(id);
  }

  public updateActiveStatus(status: TrainingSessionExerciseAttemptStatus): void {
    this.trainingSessionExerciseAttemptsStore.updateActive({ status });
  }
}

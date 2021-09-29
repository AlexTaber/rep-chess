import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { TrainingSessionExerciseAttemptsQuery } from 'src/app/training-session-exercise-attempts/state';
import { TrainingSession, TrainingSessionResults } from 'src/app/training-sessions/state';
import { TrainingSessionExercise } from '.';
import { TrainingSessionExercisesStore, TrainingSessionExercisesState } from './training-session-exercises.store';

@Injectable({ providedIn: 'root' })
export class TrainingSessionExercisesQuery extends QueryEntity<TrainingSessionExercisesState> {
  public active$ = this.selectActive() as Observable<TrainingSessionExercise>;

  constructor(
    protected store: TrainingSessionExercisesStore,
    private attemptsQuery: TrainingSessionExerciseAttemptsQuery,
  ) {
    super(store);
  }

  public getActiveTrainingSessionExercise(): TrainingSessionExercise | undefined {
    return this.getActive() as TrainingSessionExercise | undefined;
  }

  public getResultsCountFromSession(session: TrainingSession): Partial<TrainingSessionResults> {
    const exercises = this.getAll().filter(exercise => exercise.trainingSessionId === session.id);
    return exercises.reduce((results: Partial<TrainingSessionResults>, exercise) => this.reduceResultsFromExercise(exercise, results), { successes: 0, failures: 0 })
  }

  private reduceResultsFromExercise(exercise: TrainingSessionExercise, results: Partial<TrainingSessionResults>): Partial<TrainingSessionResults> {
    const attempts = this.attemptsQuery.getAll().filter(attempt => attempt.trainingSessionExerciseId === exercise.id);
    const isFailure = !!attempts.find(attempt => attempt.status === "fail");
    const isSuccess = !isFailure && !!attempts.find(attempt => attempt.status === "pass");
    return {
      successes: results.successes! + (isSuccess ? 1 : 0),
      failures: results.failures! + (isFailure ? 1 : 0),
    }
  }
}

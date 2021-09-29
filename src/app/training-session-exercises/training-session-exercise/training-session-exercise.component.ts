import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExerciseFailEvent } from 'src/app/exercises/exercise/state/exercise.store';
import { ExercisesService } from 'src/app/exercises/state';
import { TrainingSessionExerciseAttemptsService } from 'src/app/training-session-exercise-attempts/state';
import { TrainingSessionExercisesQuery } from '../state';

@Component({
  selector: 'app-training-session-exercise',
  templateUrl: './training-session-exercise.component.html',
  styleUrls: ['./training-session-exercise.component.scss']
})
export class TrainingSessionExerciseComponent implements OnInit, OnDestroy {
  @Output() complete = new EventEmitter<void>();

  private trainingExerciseSub?: Subscription;

  constructor(
    private trainingSessionExercisesQuery: TrainingSessionExercisesQuery,
    private trainingSessionExerciseAttemptsService: TrainingSessionExerciseAttemptsService,
    private exercisesService: ExercisesService,
  ) { }

  ngOnInit(): void {
    this.setTrainingExerciseSub();
  }

  ngOnDestroy(): void {
    this.trainingExerciseSub?.unsubscribe();
  }

  public onInitExercise(): void {
    this.createAttempt();
  }

  public onPassExercise(): void {
    this.trainingSessionExerciseAttemptsService.updateActiveStatus("pass");
    this.complete.emit();
  }

  public onFailExercise(event: ExerciseFailEvent): void {
    this.trainingSessionExerciseAttemptsService.updateActiveStatus("fail");
    event.shouldSkip ? this.complete.emit() : this.createAttempt();
  }

  private setTrainingExerciseSub(): void {
    this.trainingExerciseSub = this.trainingSessionExercisesQuery.active$
      .subscribe(active => this.exercisesService.setActive(active.exerciseId));
  }

  private createAttempt(): void {
    const activeId = this.trainingSessionExercisesQuery.getActiveId();
    this.trainingSessionExerciseAttemptsService.createAndSetActive(activeId)
  }
}

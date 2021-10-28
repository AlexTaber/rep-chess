import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { TrainingSessionConfig } from 'src/app/training-sessions/state';
import { ExerciseComponent } from '../exercise/exercise.component';
import { ExerciseQuery } from '../exercise/state';
import { Exercise, ExerciseAttempt, ExercisesQuery, ExercisesService } from '../state';

@Component({
  selector: 'app-train-exercises',
  templateUrl: './train-exercises.component.html',
  styleUrls: ['./train-exercises.component.scss']
})
export class TrainExercisesComponent implements OnInit, OnDestroy {
  @Input() set exercises(exercises: Exercise[]) {
    this.onSetExercises(exercises);
  }

  @Input() config?: TrainingSessionConfig;

  @Output() exerciseComplete = new EventEmitter<ExerciseAttempt>();
  @Output() finish = new EventEmitter<ExerciseAttempt>();
  @Output() complete = new EventEmitter<void>();

  @ViewChild("exerciseComponent") exerciseComponent?: ExerciseComponent;

  @HostListener('window:beforeunload')
  beforeUnloadHandler() {
    this.onFinish();
  }

  private finished = false;

  constructor(
    private exercisesService: ExercisesService,
    private exercisesQuery: ExercisesQuery,
    private exerciseQuery: ExerciseQuery,
  ) { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.onFinish();
  }

  public onCompleteExercise(attempt: ExerciseAttempt): void {
    this.exerciseComplete.emit(attempt);
    this.emitCompleteOrSetNextActive();
  }

  public onFinish(): void {
    if (!this.finished) {
      this.finished = true;
      const attempt = this.exerciseQuery.getValue().status !== "pass"
        ? this.exerciseComponent?.getAttempt("pending")
        : undefined;
      this.finish.emit(attempt);
    }
  }

  private onSetExercises(exercises: Exercise[]): void {
    this.exercisesService.set(exercises);
    const active = exercises[0];
    this.exercisesService.setActive(active?.id);
  }

  private emitCompleteOrSetNextActive(): void {
    this.exercisesQuery.lastIsActive() ? this.complete.emit() : this.setNextActive();
  }

  private setNextActive(): void {
    this.exercisesService.setNextActive();
  }
}

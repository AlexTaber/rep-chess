import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { guid } from '@datorama/akita';
import { TrainingSessionConfig } from 'src/app/training-sessions/state';
import { ExerciseComponent } from '../exercise/exercise.component';
import { Exercise, ExerciseAttempt, ExercisesService } from '../state';

@Component({
  selector: 'app-train-exercises',
  templateUrl: './train-exercises.component.html',
  styleUrls: ['./train-exercises.component.scss']
})
export class TrainExercisesComponent implements OnInit {
  @Input() set exercises(exercises: Exercise[]) {
    this.onSetExercises(exercises);
  }

  @Input() config?: TrainingSessionConfig;

  @Output() exerciseComplete = new EventEmitter<ExerciseAttempt>();
  @Output() complete = new EventEmitter<ExerciseAttempt>();

  @ViewChild("exerciseComponent") exerciseComponent?: ExerciseComponent;

  constructor(
    private exercisesService: ExercisesService,
  ) { }

  ngOnInit(): void {}

  public onCompleteExercise(attempt: ExerciseAttempt): void {
    this.exerciseComplete.emit(attempt);
    this.setNextActive();
  }

  public onComplete(): void {
    const attempt = this.exerciseComponent?.getAttempt("pending");
    this.complete.emit(attempt);
  }

  private onSetExercises(exercises: Exercise[]): void {
    this.exercisesService.set(exercises);
    this.exercisesService.setActive(exercises[0]?.id);
  }

  private setNextActive(): void {
    this.exercisesService.setNextActive();
  }
}

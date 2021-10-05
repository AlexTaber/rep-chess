import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { guid } from '@datorama/akita';
import { Exercise, ExerciseAttempt, ExerciseAttemptStatus, ExercisesService } from '../state';

@Component({
  selector: 'app-train-exercises',
  templateUrl: './train-exercises.component.html',
  styleUrls: ['./train-exercises.component.scss']
})
export class TrainExercisesComponent implements OnInit {
  @Input() set exercises(exercises: Exercise[]) {
    this.onSetExercises(exercises);
  }

  @Output() exerciseComplete = new EventEmitter<ExerciseAttempt>();

  constructor(
    private exercisesService: ExercisesService,
  ) { }

  ngOnInit(): void {}

  public onComplete(attempt: ExerciseAttempt): void {
    this.exerciseComplete.emit(attempt);
    this.setNextActive();
  }

  private onSetExercises(exercises: Exercise[]): void {
    this.exercisesService.set(exercises);
    this.exercisesService.setActive(exercises[0]?.id);
  }

  private setNextActive(): void {
    this.exercisesService.setNextActive();
  }
}

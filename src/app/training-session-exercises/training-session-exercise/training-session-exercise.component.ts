import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExercisesService } from 'src/app/exercises/state';
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
    private exercisesService: ExercisesService,
  ) { }

  ngOnInit(): void {
    this.setTrainingExerciseSub();
  }

  ngOnDestroy(): void {
    this.trainingExerciseSub?.unsubscribe();
  }

  public onCompleteExercise(): void {
    this.complete.emit();
  }

  private setTrainingExerciseSub(): void {
    this.trainingExerciseSub = this.trainingSessionExercisesQuery.active$
      .subscribe(active => this.exercisesService.setActive(active.exerciseId));
  }
}

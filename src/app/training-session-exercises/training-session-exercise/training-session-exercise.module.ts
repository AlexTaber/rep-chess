import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSessionExerciseComponent } from './training-session-exercise.component';
import { ExerciseModule } from 'src/app/exercises/exercise/exercise.module';



@NgModule({
  declarations: [
    TrainingSessionExerciseComponent
  ],
  imports: [
    CommonModule,
    ExerciseModule,
  ],
  exports: [
    TrainingSessionExerciseComponent
  ]
})
export class TrainingSessionExerciseModule { }

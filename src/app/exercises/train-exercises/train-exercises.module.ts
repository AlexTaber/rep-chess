import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainExercisesComponent } from './train-exercises.component';
import { ExerciseModule } from '../exercise/exercise.module';
import { ExercisesClockModule } from '../exercises-clock/exercises-clock.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    TrainExercisesComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ExerciseModule,
    ExercisesClockModule,
  ],
  exports: [
    TrainExercisesComponent
  ]
})
export class TrainExercisesModule { }

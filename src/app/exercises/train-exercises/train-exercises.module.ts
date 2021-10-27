import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainExercisesComponent } from './train-exercises.component';
import { ExerciseModule } from '../exercise/exercise.module';
import { ExercisesClockModule } from '../exercises-clock/exercises-clock.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    TrainExercisesComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    ExerciseModule,
    ExercisesClockModule,
  ],
  exports: [
    TrainExercisesComponent
  ]
})
export class TrainExercisesModule { }

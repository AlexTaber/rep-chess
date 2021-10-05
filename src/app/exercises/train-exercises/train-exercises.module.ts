import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainExercisesComponent } from './train-exercises.component';
import { ExerciseModule } from '../exercise/exercise.module';



@NgModule({
  declarations: [
    TrainExercisesComponent
  ],
  imports: [
    CommonModule,
    ExerciseModule,
  ],
  exports: [
    TrainExercisesComponent
  ]
})
export class TrainExercisesModule { }

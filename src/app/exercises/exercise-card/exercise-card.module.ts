import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseCardComponent } from './exercise-card.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ExerciseCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    ExerciseCardComponent
  ]
})
export class ExerciseCardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseCardComponent } from './exercise-card.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ExerciseCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
  ],
  exports: [
    ExerciseCardComponent
  ]
})
export class ExerciseCardModule { }

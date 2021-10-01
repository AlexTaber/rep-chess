import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesFilterInputComponent } from './exercises-filter-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from "@angular/material/select";



@NgModule({
  declarations: [
    ExercisesFilterInputComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [
    ExercisesFilterInputComponent
  ]
})
export class ExercisesFilterInputModule { }

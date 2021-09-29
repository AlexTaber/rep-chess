import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { TrainingSessionFormComponent } from './training-session-form.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    TrainingSessionFormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    TrainingSessionFormComponent
  ]
})
export class TrainingSessionFormModule { }

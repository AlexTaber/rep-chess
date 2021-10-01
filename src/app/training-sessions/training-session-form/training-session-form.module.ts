import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { TrainingSessionFormComponent } from './training-session-form.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    TrainingSessionFormComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
  ],
  exports: [
    TrainingSessionFormComponent
  ]
})
export class TrainingSessionFormModule { }

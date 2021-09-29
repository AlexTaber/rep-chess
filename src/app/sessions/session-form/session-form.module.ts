import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { SessionFormComponent } from './session-form.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    SessionFormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    SessionFormComponent
  ]
})
export class SessionFormModule { }

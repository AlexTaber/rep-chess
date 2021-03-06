import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacksFormComponent } from './packs-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ExercisesFilterInputModule } from 'src/app/exercises/exercises-filter-input/exercises-filter-input.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PacksFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ExercisesFilterInputModule,
  ],
  exports: [
    PacksFormComponent
  ]
})
export class PacksFormModule { }

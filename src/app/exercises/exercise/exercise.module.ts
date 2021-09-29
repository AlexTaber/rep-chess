import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseComponent } from './exercise.component';
import { NgxChessBoardModule } from 'ngx-chess-board';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ExerciseComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    NgxChessBoardModule,
  ],
  exports: [
    ExerciseComponent
  ]
})
export class ExerciseModule { }

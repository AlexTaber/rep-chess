import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseComponent } from './exercise.component';
import { NgxChessBoardModule } from 'ngx-chess-board';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ExerciseComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    NgxChessBoardModule,
  ],
  exports: [
    ExerciseComponent
  ]
})
export class ExerciseModule { }

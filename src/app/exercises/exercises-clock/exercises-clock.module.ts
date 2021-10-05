import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesClockComponent } from './exercises-clock.component';
import { CountdownModule } from 'ngx-countdown';



@NgModule({
  declarations: [
    ExercisesClockComponent
  ],
  imports: [
    CommonModule,
    CountdownModule,
  ],
  exports: [
    ExercisesClockComponent
  ]
})
export class ExercisesClockModule { }

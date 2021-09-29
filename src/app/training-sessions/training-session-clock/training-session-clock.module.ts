import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSessionClockComponent } from './training-session-clock.component';
import { CountdownModule } from 'ngx-countdown';



@NgModule({
  declarations: [
    TrainingSessionClockComponent
  ],
  imports: [
    CommonModule,
    CountdownModule,
  ],
  exports: [
    TrainingSessionClockComponent
  ]
})
export class TrainingSessionClockModule { }

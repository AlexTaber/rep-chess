import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSessionsCalendarComponent } from './training-sessions-calendar.component';
import { CalendarModule } from 'src/app/ui/charts/calendar/calendar.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    TrainingSessionsCalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    MatCardModule,
  ],
  exports: [
    TrainingSessionsCalendarComponent
  ]
})
export class TrainingSessionsCalendarModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsCalendarComponent } from './stats-calendar.component';
import { CalendarModule } from 'src/app/ui/charts/calendar/calendar.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    StatsCalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    MatCardModule,
  ],
  exports: [
    StatsCalendarComponent
  ]
})
export class StatsCalendarModule { }

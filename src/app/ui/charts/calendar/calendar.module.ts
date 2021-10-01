import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { ChartsModule } from '../charts.module';



@NgModule({
  declarations: [
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    ChartsModule,
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }

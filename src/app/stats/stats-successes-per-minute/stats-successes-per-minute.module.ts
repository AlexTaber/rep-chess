import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusSuccessesPerMinuteComponent } from './stats-successes-per-minute.component';
import { ScatterChartModule } from 'src/app/ui/charts/scatter-chart/scatter-chart.module';



@NgModule({
  declarations: [
    StatusSuccessesPerMinuteComponent
  ],
  imports: [
    CommonModule,
    ScatterChartModule,
  ],
  exports: [
    StatusSuccessesPerMinuteComponent
  ]
})
export class StatusSuccessesPerMinuteModule { }

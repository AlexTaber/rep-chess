import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSessionsSuccessesPerMinuteComponent } from './training-sessions-successes-per-minute.component';
import { ScatterChartModule } from 'src/app/ui/charts/scatter-chart/scatter-chart.module';



@NgModule({
  declarations: [
    TrainingSessionsSuccessesPerMinuteComponent
  ],
  imports: [
    CommonModule,
    ScatterChartModule,
  ],
  exports: [
    TrainingSessionsSuccessesPerMinuteComponent
  ]
})
export class TrainingSessionsSuccessesPerMinuteModule { }

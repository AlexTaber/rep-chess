import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSessionsScatterBarChartComponent } from './training-sessions-scatter-bar-chart.component';
import { ScatterBarChartModule } from 'src/app/ui/charts/scatter-bar-chart/scatter-bar-chart.module';



@NgModule({
  declarations: [
    TrainingSessionsScatterBarChartComponent
  ],
  imports: [
    CommonModule,
    ScatterBarChartModule,
  ],
  exports: [
    TrainingSessionsScatterBarChartComponent
  ]
})
export class TrainingSessionsScatterBarChartModule { }

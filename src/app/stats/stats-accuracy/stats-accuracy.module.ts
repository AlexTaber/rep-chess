import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsAccuracyComponent } from './stats-accuracy.component';
import { ScatterChartModule } from 'src/app/ui/charts/scatter-chart/scatter-chart.module';



@NgModule({
  declarations: [
    StatsAccuracyComponent
  ],
  imports: [
    CommonModule,
    ScatterChartModule,
  ],
  exports: [
    StatsAccuracyComponent
  ]
})
export class StatsAccuracyModule { }

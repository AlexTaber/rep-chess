import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScatterChartComponent } from './scatter-chart.component';
import { ChartsModule } from '../charts.module';



@NgModule({
  declarations: [
    ScatterChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
  ],
  exports: [
    ScatterChartComponent
  ]
})
export class ScatterChartModule { }

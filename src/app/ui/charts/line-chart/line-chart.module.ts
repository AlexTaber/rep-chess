import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart.component';
import { ChartsModule } from '../charts.module';


@NgModule({
  declarations: [
    LineChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
  ],
  exports: [
    LineChartComponent
  ]
})
export class LineChartModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScatterBarChartComponent } from './scatter-bar-chart.component';
import { ChartsModule } from '../charts.module';



@NgModule({
  declarations: [
    ScatterBarChartComponent,
  ],
  imports: [
    CommonModule,
    ChartsModule,
  ],
  exports: [
    ScatterBarChartComponent,
  ]
})
export class ScatterBarChartModule { }

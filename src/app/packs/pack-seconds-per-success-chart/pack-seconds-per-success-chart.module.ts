import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackSecondsPerSuccessChartComponent } from './pack-seconds-per-success-chart.component';
import { ScatterChartModule } from 'src/app/ui/charts/scatter-chart/scatter-chart.module';



@NgModule({
  declarations: [
    PackSecondsPerSuccessChartComponent
  ],
  imports: [
    CommonModule,
    ScatterChartModule,
  ],
  exports: [
    PackSecondsPerSuccessChartComponent
  ]
})
export class PackSecondsPerSuccessChartModule { }

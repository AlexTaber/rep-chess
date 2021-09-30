import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackAccuracyChartComponent } from './pack-accuracy-chart.component';
import { ScatterChartModule } from 'src/app/ui/charts/scatter-chart/scatter-chart.module';



@NgModule({
  declarations: [
    PackAccuracyChartComponent
  ],
  imports: [
    CommonModule,
    ScatterChartModule,
  ],
  exports: [
    PackAccuracyChartComponent
  ]
})
export class PackAccuracyChartModule { }

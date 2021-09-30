import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackResultsComponent } from './pack-results.component';
import { PackSecondsPerSuccessChartModule } from '../pack-seconds-per-success-chart/pack-seconds-per-success-chart.module';


@NgModule({
  declarations: [
    PackResultsComponent
  ],
  imports: [
    CommonModule,
    PackSecondsPerSuccessChartModule,
  ],
  exports: [
    PackResultsComponent
  ]
})
export class PackResultsModule { }

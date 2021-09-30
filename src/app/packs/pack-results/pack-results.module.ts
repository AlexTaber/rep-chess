import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackResultsComponent } from './pack-results.component';
import { PackSecondsPerSuccessChartModule } from '../pack-seconds-per-success-chart/pack-seconds-per-success-chart.module';
import { PackAccuracyChartModule } from '../pack-accuracy-chart/pack-accuracy-chart.module';
import { GridModule } from 'src/app/ui/grid/grid.module';


@NgModule({
  declarations: [
    PackResultsComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    PackSecondsPerSuccessChartModule,
    PackAccuracyChartModule,
  ],
  exports: [
    PackResultsComponent
  ]
})
export class PackResultsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackResultsComponent } from './pack-results.component';
import { LineChartModule } from 'src/app/ui/charts/line-chart/line-chart.module';



@NgModule({
  declarations: [
    PackResultsComponent
  ],
  imports: [
    CommonModule,
    LineChartModule,
  ],
  exports: [
    PackResultsComponent
  ]
})
export class PackResultsModule { }

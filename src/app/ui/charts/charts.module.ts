import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { ScatterChart, HeatmapChart, BarChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent, VisualMapComponent, CalendarComponent, } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  ScatterChart,
  HeatmapChart,
  BarChart,
  CanvasRenderer,
  VisualMapComponent,
  CalendarComponent,
]);


@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({ echarts }),
  ],
  exports: [
    NgxEchartsModule,
  ]
})
export class ChartsModule { }

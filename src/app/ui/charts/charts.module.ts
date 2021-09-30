import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { LineChart, BarChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent, } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([TitleComponent, TooltipComponent, GridComponent, LegendComponent, LineChart, BarChart, CanvasRenderer]);


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({ echarts }),
  ],
  exports: [
    NgxEchartsModule,
  ]
})
export class ChartsModule { }

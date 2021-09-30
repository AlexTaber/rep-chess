export type ChartOptions = any;

interface BaseChartOptions {
  xAxis?: any;
  yAxis?: any;
}

export interface ScatterChartOptions extends BaseChartOptions {
  data: any[][];
}

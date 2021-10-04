export type ChartOptions = any;

interface BaseChartOptions<T = any[][]> {
  xAxis?: any;
  yAxis?: any;
  series: ChartSeries<T>[];
}

export interface ChartSeries<T = any[][]> {
  name: string;
  data: T;
}

export type ScatterChartOptions = BaseChartOptions;

export type CalendarChartOptions = BaseChartOptions;

export interface BarChartOptions extends BaseChartOptions {
  categories: string[];
}

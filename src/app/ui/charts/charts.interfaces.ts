export type ChartOptions = any;

interface BaseChartOptions<T = any[][]> {
  xAxis?: any;
  yAxis?: any;
  data: T;
}

export type ScatterChartOptions = BaseChartOptions;

export type CalendarChartOptions = BaseChartOptions;

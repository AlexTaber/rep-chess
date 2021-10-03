export type ChartOptions = any;

interface BaseChartOptions<T = any[][]> {
  xAxis?: any;
  yAxis?: any;
  data: T;
}

export type ScatterChartOptions = BaseChartOptions;

export type CalendarChartOptions = BaseChartOptions;

export interface BarChartOptions extends BaseChartOptions {
  categories: string[];
}

export interface ScatterBarChartOptions {
  scatterSettings: {
    xAxis?: any;
    yAxis?: any;
  },
  categories: ScatterChartCategory[];
}

export interface ScatterChartCategory {
  name: string;
  barData: number;
  scatterData: any[][];
}

import { ScatterChartOptions } from "./charts.interfaces";

export const getFormattedScatterChartOptions = (options: ScatterChartOptions) => {
  return {
    xAxis: options.xAxis || {},
    yAxis: options.yAxis || {},
    series: [
      {
        symbolSize: 10,
        data: options.data,
        type: 'scatter'
      }
    ]
  };
}

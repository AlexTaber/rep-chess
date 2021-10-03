import { ScatterChartOptions } from "./charts.interfaces";

export const getFormattedScatterChartOptions = (options: ScatterChartOptions) => {
  return {
    xAxis: options.xAxis || {},
    yAxis: options.yAxis || {},
    series: [
      getFormattedScatterChartSeries(options.data)
    ]
  };
}

export const getFormattedScatterChartSeries = (data: any[][]) => {
  return {
      symbolSize: 10,
      data: data,
      type: 'scatter'
    }
}

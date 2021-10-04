import { ChartSeries, ScatterChartOptions } from "./charts.interfaces";

export const getFormattedScatterChartOptions = (options: ScatterChartOptions) => {
  return {
    xAxis: options.xAxis || {},
    yAxis: options.yAxis || {},
    series: options.series.map(seriesData => getFormattedScatterChartSeries(seriesData))
  };
}

export const getFormattedScatterChartSeries = (series: ChartSeries) => {
  return {
      id: series.name,
      dataGroupId: series.name,
      symbolSize: 10,
      data: series.data,
      type: 'scatter'
    }
}

import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ScatterBarChartOptions } from '../charts.interfaces';
import { getFormattedScatterChartSeries } from '../utils';

@Component({
  selector: 'app-scatter-bar-chart',
  templateUrl: './scatter-bar-chart.component.html',
  styleUrls: ['./scatter-bar-chart.component.scss']
})
export class ScatterBarChartComponent implements OnInit {
  @Input() set options(options: ScatterBarChartOptions) {
    this.setChartsOptions(options);
  };

  @Input() interval = 4000;

  public formattedOptions?: ChartOptions;

  private formattedChartsOptions?: {
    scatter: ChartOptions;
    bar: ChartOptions;
  };

  constructor() { }

  ngOnInit(): void {
    this.toggleChartOptions();
    this.setChartToggleTimeout();
  }

  private setChartsOptions(options: ScatterBarChartOptions): ChartOptions {
    this.formattedChartsOptions = {
      bar: this.getFormattedBarOptions(options),
      scatter: {
        xAxis: { ...options.scatterSettings.xAxis, scale: true },
        yAxis: { ...options.scatterSettings.yAxis, scale: true },
        series: options.categories.map(c => ({
          ...getFormattedScatterChartSeries(c.scatterData),
          id: c.name,
          dataGroupId: c.name,
        })),
        universalTransition: {
          enabled: true,
          delay: () => Math.random() * 400,
        },
      }
    }
  }

  private getFormattedBarOptions(options: ScatterBarChartOptions): ChartOptions {
    const categoryNames = options.categories.map(category => category.name);
    return {
      xAxis: {
        type: 'category',
        data: categoryNames,
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          id: 'total',
          data: options.categories.map(category => ({ groupId: category.name, value: category.barData })),
        }
      ],
      universalTransition: {
        enabled: true,
        seriesKey: categoryNames,
        delay: () => Math.random() * 400,
      }
    };
  }

  private setChartToggleTimeout(): void {
    setTimeout(() => {
      this.toggleChartOptions();
      this.setChartToggleTimeout();
    }, this.interval);
  }

  private toggleChartOptions(): void {
    this.formattedOptions = this.formattedOptions === this.formattedChartsOptions?.scatter
      ? this.formattedChartsOptions?.bar
      : this.formattedChartsOptions?.scatter;

    console.log(this.formattedOptions);
  }
}

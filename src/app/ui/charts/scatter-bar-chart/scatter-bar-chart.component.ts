import { Component, Input, OnInit } from '@angular/core';
import { BarChartOptions, ChartOptions, ScatterBarChartOptions } from '../charts.interfaces';
import { getFormattedScatterChartOptions } from '../utils';

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
      bar: this.getFormattedBarOptions(options.bar),
      scatter: {
        ...getFormattedScatterChartOptions(options.scatter),
        universalTransition: {
          enabled: true,
        },
      }
    }
  }

  private getFormattedBarOptions(options: BarChartOptions): ChartOptions {
    return {
      xAxis: {
        type: 'category',
        data: options.categories,
        ...options.xAxis
      },
      yAxis: options.yAxis || {},
      series: [
        {
          type: 'bar',
          id: 'total',
          data: options.data,
        }
      ],
      universalTransition: {
        enabled: true,
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
  }
}

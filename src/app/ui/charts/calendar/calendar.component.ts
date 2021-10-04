import { Component, Input, OnInit } from '@angular/core';
import { CalendarChartOptions, ChartOptions } from '../charts.interfaces';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() set options(options: CalendarChartOptions) {
    this.setFormattedOptions(options);
  };

  public formattedOptions?: ChartOptions;

  constructor() { }

  ngOnInit(): void {}

  private setFormattedOptions(options: CalendarChartOptions): ChartOptions {
    this.formattedOptions = {
      visualMap: {
        show: false,
        min: 0,
        max: 10
      },
      calendar: {
        range: new Date().getFullYear(),
        cellSize: 15,
      },
      series: options.series.map(seriesData => ({
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: seriesData.data,
      }))
    };
  }
}

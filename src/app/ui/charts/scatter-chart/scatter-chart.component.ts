import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ScatterChartOptions } from '../charts.interfaces';
import { getFormattedScatterChartOptions } from '../utils';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.scss']
})
export class ScatterChartComponent implements OnInit {
  @Input() set options(options: ScatterChartOptions) {
    this.setFormattedOptions(options);
  };

  public formattedOptions?: ChartOptions;

  constructor() { }

  ngOnInit(): void {}

  private setFormattedOptions(options: ScatterChartOptions): ChartOptions {
    this.formattedOptions = getFormattedScatterChartOptions(options);
  }
}

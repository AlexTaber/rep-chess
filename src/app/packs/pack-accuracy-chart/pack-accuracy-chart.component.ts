import { Component, Input, OnInit } from '@angular/core';
import { TrainingSession } from 'src/app/training-sessions/state';
import { ScatterChartOptions } from 'src/app/ui/charts/charts.interfaces';

@Component({
  selector: 'app-pack-accuracy-chart',
  templateUrl: './pack-accuracy-chart.component.html',
  styleUrls: ['./pack-accuracy-chart.component.scss']
})
export class PackAccuracyChartComponent implements OnInit {
  @Input() set sessions(sessions: TrainingSession[]) {
    this.setOptionsFromSessions(sessions);
  }

  public options?: ScatterChartOptions;

  ngOnInit(): void {}

  private setOptionsFromSessions(sessions: TrainingSession[]): void {
    this.options = {
      xAxis: {
        type: "time",
        min: (value: any) => value.min - 100,
        max: (value: any) => value.max + 100,
      },
      data: sessions.map(session => this.getDataFromSession(session))
    }
  }

  private getDataFromSession(session: TrainingSession): any[] {
    return session.results
      ? [session.startTime, session.results.successes / (session.results.successes + session.results.failures)]
      : [undefined, undefined];
  }
}

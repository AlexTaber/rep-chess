import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrainingSession, TrainingSessionsQuery } from 'src/app/training-sessions/state';
import { ScatterChartOptions } from 'src/app/ui/charts/charts.interfaces';

@Component({
  selector: 'app-pack-seconds-per-success-chart',
  templateUrl: './pack-seconds-per-success-chart.component.html',
  styleUrls: ['./pack-seconds-per-success-chart.component.scss']
})
export class PackSecondsPerSuccessChartComponent implements OnInit {
  public options?: ScatterChartOptions;

  constructor(
    private sessionsQuery: TrainingSessionsQuery,
  ) { }

  ngOnInit(): void {
    this.setOptionsFromSessions(this.sessionsQuery.getAll());
  }

  private setOptionsFromSessions(sessions: TrainingSession[]): void {
    this.options = {
      xAxis: {
        type: "time",
      },
      data: sessions.map(session => this.getDataFromSession(session))
    }
  }

  private getDataFromSession(session: TrainingSession): any[] {
    return session.results
      ? [session.startTime, session.results.time / session.results.successes]
      : [undefined, undefined];
  }
}

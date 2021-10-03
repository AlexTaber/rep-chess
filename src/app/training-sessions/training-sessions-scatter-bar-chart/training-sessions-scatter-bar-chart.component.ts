import { Component, Input, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';
import { PacksQuery } from 'src/app/packs/state';
import { ScatterBarChartOptions } from 'src/app/ui/charts/charts.interfaces';
import { TrainingSession, TrainingSessionResults } from '../state';

@Component({
  selector: 'app-training-sessions-scatter-bar-chart',
  templateUrl: './training-sessions-scatter-bar-chart.component.html',
  styleUrls: ['./training-sessions-scatter-bar-chart.component.scss']
})
export class TrainingSessionsScatterBarChartComponent implements OnInit {
  @Input() set sessions(sessions: TrainingSession[]) {
    this.setOptionsFromSessions(sessions);
  }

  public options?: ScatterBarChartOptions;

  constructor(
    private packsQuery: PacksQuery,
  ) {}

  ngOnInit(): void {}

  private setOptionsFromSessions(sessions: TrainingSession[]): void {
    const uniquePackIds = this.getUniquePackIds(sessions);
    this.options = {
      scatter: {
        xAxis: {
          type: "time",
          min: (value: any) => value.min - 100,
          max: (value: any) => value.max + 100,
        },
        data: sessions.map(session => this.getDataFromSession(session))
      },
      bar: {
        categories: uniquePackIds.map(id => this.packsQuery.getEntity(id)?.name || ""),
        data: this.calculateAverages(sessions, uniquePackIds),
      }
    }
  }

  private getUniquePackIds(sessions: TrainingSession[]): ID[] {
    let ids = sessions.map(session => session.packId);
    return [...new Set(ids)];
  }

  private getDataFromSession(session: TrainingSession): any[] {
    return session.results
      ? [session.startTime, this.getSuccessesPerMinute(session.results)]
      : [undefined, undefined];
  }

  private getSuccessesPerMinute(results: TrainingSessionResults): number {
    return (results.successes / results.time) * 60
  }

  private calculateAverages(sessions: TrainingSession[], uniquePackIds: ID[]): any[][] {
    return uniquePackIds.map(id => this.calculateAverageFromId(id, sessions));
  }

  private calculateAverageFromId(id: ID, sessions: TrainingSession[]): any[] {
    const currentSessions = sessions.filter(session => session.packId === id);
    const sum = currentSessions.reduce((sum, session) => sum + this.getSuccessesPerMinute(session.results!), 0);
    return [this.packsQuery.getEntity(id)?.name, sum / currentSessions.length];
  }
}

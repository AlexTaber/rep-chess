import { Component, Input, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';
import { Pack, PacksQuery } from 'src/app/packs/state';
import { ScatterBarChartOptions, ScatterChartCategory } from 'src/app/ui/charts/charts.interfaces';
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
      scatterSettings: {
        xAxis: {
          type: "time",
          min: (value: any) => value.min - 100,
          max: (value: any) => value.max + 100,
        },
      },
      categories: uniquePackIds.map(id => this.getCategoryFromPackId(id, sessions)),
    }
  }

  private getCategoryFromPackId(packId: ID, sessions: TrainingSession[]): ScatterChartCategory {
    const pack = this.packsQuery.getEntity(packId) as Pack;
    const packSessions = sessions.filter(session => session.packId === packId);
    return {
      name: pack.name,
      barData: this.calculateAverageFromSessions(packSessions),
      scatterData: packSessions.map(session => this.getScatterDataFromSession(session)),
    }
  }

  private getUniquePackIds(sessions: TrainingSession[]): ID[] {
    let ids = sessions.map(session => session.packId);
    return [...new Set(ids)];
  }

  private getScatterDataFromSession(session: TrainingSession): any[] {
    return session.results
      ? [session.startTime, this.getSuccessesPerMinute(session.results)]
      : [undefined, undefined];
  }

  private getSuccessesPerMinute(results: TrainingSessionResults): number {
    return (results.successes / results.time) * 60
  }

  private calculateAverageFromSessions(sessions: TrainingSession[]): number {
    const sum = sessions.reduce((sum, session) => sum + this.getSuccessesPerMinute(session.results!), 0);
    return sum / sessions.length;
  }
}

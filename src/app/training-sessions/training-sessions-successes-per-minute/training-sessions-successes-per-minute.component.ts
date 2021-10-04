import { Component, Input, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';
import { Pack, PacksQuery } from 'src/app/packs/state';
import { ScatterChartOptions } from 'src/app/ui/charts/charts.interfaces';
import { TrainingSession, TrainingSessionResults } from '../state';

@Component({
  selector: 'app-training-sessions-successes-per-minute',
  templateUrl: './training-sessions-successes-per-minute.component.html',
  styleUrls: ['./training-sessions-successes-per-minute.component.scss']
})
export class TrainingSessionsSuccessesPerMinuteComponent implements OnInit {
  @Input() set sessions(sessions: TrainingSession[]) {
    this.setOptionsFromSessions(sessions);
  }

  public options?: ScatterChartOptions;

  constructor(
    private packsQuery: PacksQuery,
  ) {}

  ngOnInit(): void {}

  private setOptionsFromSessions(sessions: TrainingSession[]): void {
    const uniquePackIds = this.getUniquePackIds(sessions);
    this.options = {
      series: uniquePackIds.map(id => ({
        name: this.packsQuery.getEntity(id)?.name || "",
        data: this.getDataFromPackId(id, sessions)
      })),
    }
  }

  private getDataFromPackId(packId: ID, sessions: TrainingSession[]): any[][] {
    const packSessions = sessions.filter(session => session.packId === packId);
    return packSessions.map(session => this.getDataFromSession(session, sessions));
  }

  private getUniquePackIds(sessions: TrainingSession[]): ID[] {
    let ids = sessions.map(session => session.packId);
    return [...new Set(ids)];
  }

  private getDataFromSession(session: TrainingSession, allSessions: TrainingSession[]): any[] {
    const index = allSessions.findIndex(s => s.id === session.id);
    return session.results
      ? [index, this.getSuccessesPerMinute(session.results)]
      : [undefined, undefined];
  }

  private getSuccessesPerMinute(results: TrainingSessionResults): number {
    return (results.successes / results.time) * 60
  }
}

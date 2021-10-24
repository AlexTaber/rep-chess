import { Component, Input, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';
import { ExerciseCollection, ExerciseResults } from 'src/app/exercises/state';
import { PacksQuery } from 'src/app/packs/state';
import { ScatterChartOptions } from 'src/app/ui/charts/charts.interfaces';

@Component({
  selector: 'app-stats-successes-per-minute',
  templateUrl: './stats-successes-per-minute.component.html',
  styleUrls: ['./stats-successes-per-minute.component.scss']
})
export class StatusSuccessesPerMinuteComponent implements OnInit {
  @Input() set sessions(sessions: ExerciseCollection[]) {
    this.setOptionsFromSessions(sessions);
  }

  public options?: ScatterChartOptions;

  constructor(
    private packsQuery: PacksQuery,
  ) {}

  ngOnInit(): void {}

  private setOptionsFromSessions(sessions: ExerciseCollection[]): void {
    const uniquePackIds = this.getUniquePackIds(sessions);
    this.options = {
      series: uniquePackIds.map(id => ({
        name: this.packsQuery.getEntity(id)?.name || "",
        data: this.getDataFromPackId(id, sessions)
      })),
    }
  }

  private getDataFromPackId(packId: ID, sessions: ExerciseCollection[]): any[][] {
    const packSessions = sessions.filter(session => session.packId === packId);
    return packSessions.map(session => this.getDataFromSession(session, sessions));
  }

  private getUniquePackIds(sessions: ExerciseCollection[]): ID[] {
    let ids = sessions.map(session => session.packId);
    return [...new Set(ids)];
  }

  private getDataFromSession(session: ExerciseCollection, allSessions: ExerciseCollection[]): any[] {
    const index = allSessions.findIndex(s => s.id === session.id);
    return session.results
      ? [index, this.getSuccessesPerMinute(session.results)]
      : [undefined, undefined];
  }

  private getSuccessesPerMinute(results: ExerciseResults): number {
    return (results.successes / results.time) * 60
  }
}

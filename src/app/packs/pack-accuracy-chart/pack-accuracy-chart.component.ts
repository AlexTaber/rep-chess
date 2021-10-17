import { Component, Input, OnInit } from '@angular/core';
import { ExerciseCollection } from 'src/app/exercises/state';
import { ScatterChartOptions } from 'src/app/ui/charts/charts.interfaces';

@Component({
  selector: 'app-pack-accuracy-chart',
  templateUrl: './pack-accuracy-chart.component.html',
  styleUrls: ['./pack-accuracy-chart.component.scss']
})
export class PackAccuracyChartComponent implements OnInit {
  @Input() set sessions(sessions: ExerciseCollection[]) {
    this.setOptionsFromSessions(sessions);
  }

  public options?: ScatterChartOptions;

  ngOnInit(): void {}

  private setOptionsFromSessions(sessions: ExerciseCollection[]): void {
    this.options = {
      series: [
        {
          name: "Accuracy",
          data: sessions.map((session, index) => this.getDataFromSession(session, index))
        }
      ]
    }
  }

  private getDataFromSession(session: ExerciseCollection, index: number): any[] {
    return session.results
      ? [index, (session.results.successes / (session.results.successes + session.results.failures)) * 100]
      : [index, 0];
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { CalendarChartOptions } from 'src/app/ui/charts/charts.interfaces';
import { TrainingSession } from '../state';
import { time } from "echarts";

@Component({
  selector: 'app-training-sessions-calendar',
  templateUrl: './training-sessions-calendar.component.html',
  styleUrls: ['./training-sessions-calendar.component.scss']
})
export class TrainingSessionsCalendarComponent implements OnInit {
  @Input() set sessions(sessions: TrainingSession[]) {
    this.setOptionsFromSessions(sessions);
  }

  public options?: CalendarChartOptions;

  ngOnInit(): void {}

  private setOptionsFromSessions(sessions: TrainingSession[]): void {
    this.options = {
      data: sessions.reduce((data, session) => this.reduceDataFromSession(data, session), [] as any[][])
    }
  }

  private reduceDataFromSession(data: any[][], session: TrainingSession): any[][] {
    data.push([
      time.format(session.startTime, 'yyyy-MM-dd', true),
      1,
    ])
    return data;
  }
}

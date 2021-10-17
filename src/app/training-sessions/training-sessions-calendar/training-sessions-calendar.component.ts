import { Component, Input, OnInit } from '@angular/core';
import { CalendarChartOptions } from 'src/app/ui/charts/charts.interfaces';
import { format } from 'date-fns';
import { ExerciseCollection } from 'src/app/exercises/state';

@Component({
  selector: 'app-training-sessions-calendar',
  templateUrl: './training-sessions-calendar.component.html',
  styleUrls: ['./training-sessions-calendar.component.scss']
})
export class TrainingSessionsCalendarComponent implements OnInit {
  @Input() set sessions(sessions: ExerciseCollection[]) {
    this.setOptionsFromSessions(sessions);
  }

  public options?: CalendarChartOptions;

  ngOnInit(): void {}

  private setOptionsFromSessions(sessions: ExerciseCollection[]): void {
    this.options = {
      series: [
        {
          name: "Calendar",
          data: sessions.reduce((data, session) => this.reduceDataFromSession(data, session), [] as any[][])
        }
      ],
    }
  }

  private reduceDataFromSession(data: any[][], session: ExerciseCollection): any[][] {
    const sessionDate = format(new Date(session.startTime), 'yyyy-MM-dd');
    const matchingData = data.find(dataItem => dataItem[0] === sessionDate);
    if (matchingData) {
      matchingData[1] ++;
    } else {
      data.push([
        sessionDate,
        1,
      ])
    }

    return data;
  }
}

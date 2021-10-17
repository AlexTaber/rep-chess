import { Component, Input, OnInit } from '@angular/core';
import { addSeconds, format } from 'date-fns';
import { ExerciseCollection } from 'src/app/exercises/state';
import { TimeInSeconds } from '../state';

interface QuickStats {
  sessionCount: number;
  trainingTime: string;
  averageSuccesses: number;
  averageFailures: number;
}

@Component({
  selector: 'app-training-sessions-quick-stats',
  templateUrl: './training-sessions-quick-stats.component.html',
  styleUrls: ['./training-sessions-quick-stats.component.scss']
})
export class TrainingSessionsQuickStatsComponent implements OnInit {
  @Input() set sessions(sessions: ExerciseCollection[]) {
    this.setStatsFromSessions(sessions);
  };

  public stats?: QuickStats;

  constructor() { }

  ngOnInit(): void {}

  private setStatsFromSessions(sessions: ExerciseCollection[]): void {
    this.stats = {
      sessionCount: sessions.length,
      trainingTime: this.formattedTime(sessions.reduce((time, session) => time + (session.results?.time || 0), 0) as TimeInSeconds),
      averageSuccesses: sessions.reduce((average, session) => average + (session.results?.successes || 0), 0) / sessions.length,
      averageFailures: sessions.reduce((average, session) => average + (session.results?.failures || 0), 0) / sessions.length
    }
  }

  private formattedTime(seconds: TimeInSeconds): string {
    var helperDate = addSeconds(new Date(0), seconds);
    return format(helperDate, 'mm:ss');
  }
}

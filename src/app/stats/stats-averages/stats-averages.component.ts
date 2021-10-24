import { Component, Input, OnInit } from '@angular/core';
import { ExerciseCollection } from 'src/app/exercises/state';
import { TimeInSeconds } from '../../training-sessions/state';

interface StatsAverages {
  sessionCount: number;
  averageTime: number;
  averageAccuracy: string;
}

@Component({
  selector: 'app-stats-averages',
  templateUrl: './stats-averages.component.html',
  styleUrls: ['./stats-averages.component.scss']
})
export class StatsAveragesComponent implements OnInit {
  @Input() set sessions(sessions: ExerciseCollection[]) {
    this.setStatsFromSessions(sessions);
  };

  @Input() name = "Sessions";

  public stats?: StatsAverages;

  constructor() { }

  ngOnInit(): void {}

  private setStatsFromSessions(sessions: ExerciseCollection[]): void {
    const totalSuccesses = sessions.reduce((average, session) => average + (session.results?.successes || 0), 0) / sessions.length;
    const totalFailures = sessions.reduce((average, session) => average + (session.results?.failures || 0), 0) / sessions.length;
    this.stats = {
      sessionCount: sessions.length,
      averageTime: (sessions.reduce((time, session) => time + (session.results?.time || 0), 0) as TimeInSeconds) / sessions.length,
      averageAccuracy: `${Math.round((totalSuccesses / (totalSuccesses + totalFailures)) * 100)}%`,
    }
  }
}

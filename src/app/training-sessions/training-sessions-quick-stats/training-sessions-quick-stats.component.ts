import { Component, Input, OnInit } from '@angular/core';
import { TimeInSeconds, TrainingSession } from '../state';

interface QuickStats {
  sessionCount: number;
  trainingTime: TimeInSeconds;
  averageSuccesses: number;
  averageFailures: number;
}

@Component({
  selector: 'app-training-sessions-quick-stats',
  templateUrl: './training-sessions-quick-stats.component.html',
  styleUrls: ['./training-sessions-quick-stats.component.scss']
})
export class TrainingSessionsQuickStatsComponent implements OnInit {
  @Input() set sessions(sessions: TrainingSession[]) {
    this.setStatsFromSessions(sessions);
  };

  public stats?: QuickStats;

  constructor() { }

  ngOnInit(): void {}

  private setStatsFromSessions(sessions: TrainingSession[]): void {
    this.stats = {
      sessionCount: sessions.length,
      trainingTime: sessions.reduce((time, session) => time + (session.results?.time || 0), 0),
      averageSuccesses: sessions.reduce((average, session) => average + (session.results?.successes || 0), 0) / sessions.length,
      averageFailures: sessions.reduce((average, session) => average + (session.results?.failures || 0), 0) / sessions.length
    }
  }
}

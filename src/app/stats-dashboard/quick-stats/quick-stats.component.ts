import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimeInSeconds, TrainingSession, TrainingSessionsQuery } from 'src/app/training-sessions/state';

interface QuickStats {
  sessionCount: number;
  trainingTime: TimeInSeconds;
  averageSuccesses: number;
  averageFailures: number;
}

@Component({
  selector: 'app-quick-stats',
  templateUrl: './quick-stats.component.html',
  styleUrls: ['./quick-stats.component.scss']
})
export class QuickStatsComponent implements OnInit, OnDestroy {
  public stats?: QuickStats;

  private sessionsSub?: Subscription;

  constructor(
    private sessionsQuery: TrainingSessionsQuery,
  ) { }

  ngOnInit(): void {
    this.setSessionsSub();
  }

  ngOnDestroy(): void {
    this.sessionsSub?.unsubscribe();
  }

  private setSessionsSub(): void {
    this.sessionsSub = this.sessionsQuery.all$.subscribe(sessions => this.setStatsFromSessions(sessions));
  }

  private setStatsFromSessions(sessions: TrainingSession[]): void {
    this.stats = {
      sessionCount: sessions.length,
      trainingTime: sessions.reduce((time, session) => time + (session.results?.time || 0), 0),
      averageSuccesses: sessions.reduce((average, session) => average + (session.results?.successes || 0), 0) / sessions.length,
      averageFailures: sessions.reduce((average, session) => average + (session.results?.failures || 0), 0) / sessions.length
    }
  }
}

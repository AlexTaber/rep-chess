import { Component, OnInit } from '@angular/core';
import { TrainingSessionsQuery } from '../training-sessions/state';

@Component({
  selector: 'app-stats-dashboard',
  templateUrl: './stats-dashboard.component.html',
  styleUrls: ['./stats-dashboard.component.scss']
})
export class StatsDashboardComponent implements OnInit {
  public sessions$ = this.sessionsQuery.all$;

  constructor(
    private sessionsQuery: TrainingSessionsQuery,
  ) { }

  ngOnInit(): void {
  }

}

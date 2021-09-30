import { Component, OnInit } from '@angular/core';
import { TrainingSessionsQuery } from '../state';

@Component({
  selector: 'app-training-session-results',
  templateUrl: './training-session-results.component.html',
  styleUrls: ['./training-session-results.component.scss']
})
export class TrainingSessionResultsComponent implements OnInit {
  public session$ = this.sessionsQuery.active$;

  constructor(
    private sessionsQuery: TrainingSessionsQuery,
  ) { }

  ngOnInit(): void {}
}
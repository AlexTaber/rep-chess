import { Component, OnInit } from '@angular/core';
import { TrainingSessionsQuery } from 'src/app/training-sessions/state';

@Component({
  selector: 'app-pack-results',
  templateUrl: './pack-results.component.html',
  styleUrls: ['./pack-results.component.scss']
})
export class PackResultsComponent implements OnInit {
  public sessions$ = this.sessionsQuery.activePackSessions$;

  constructor(
    private sessionsQuery: TrainingSessionsQuery,
  ) { }

  ngOnInit(): void {}
}

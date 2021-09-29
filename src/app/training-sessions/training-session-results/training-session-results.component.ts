import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ID } from '@datorama/akita';
import { TrainingSessionsQuery, TrainingSessionsService } from '../state';

@Component({
  selector: 'app-training-session-results',
  templateUrl: './training-session-results.component.html',
  styleUrls: ['./training-session-results.component.scss']
})
export class TrainingSessionResultsComponent implements OnInit {
  public session$ = this.sessionsQuery.active$;

  constructor(
    private route: ActivatedRoute,
    private sessionsService: TrainingSessionsService,
    private sessionsQuery: TrainingSessionsQuery,
  ) { }

  ngOnInit(): void {
    this.subscribeToRouteParams();
  }

  private subscribeToRouteParams(): void {
    this.route.params.subscribe(params => this.onSetSessionId(params.sessionId));
  }

  private onSetSessionId(sessionId: ID): void {
    this.sessionsService.setActive(sessionId);
  }
}

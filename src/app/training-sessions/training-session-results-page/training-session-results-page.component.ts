import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ID } from '@datorama/akita';
import { TrainingSessionsService } from '../state';

@Component({
  selector: 'app-training-session-results-page',
  templateUrl: './training-session-results-page.component.html',
  styleUrls: ['./training-session-results-page.component.scss']
})
export class TrainingSessionResultsPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private sessionsService: TrainingSessionsService,
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

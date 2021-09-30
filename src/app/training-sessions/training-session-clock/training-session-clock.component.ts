import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ID } from '@datorama/akita';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { Subscription } from 'rxjs';
import { TrainingSession, TrainingSessionsQuery } from '../state';

@Component({
  selector: 'app-training-session-clock',
  templateUrl: './training-session-clock.component.html',
  styleUrls: ['./training-session-clock.component.scss']
})
export class TrainingSessionClockComponent implements OnInit, OnDestroy {
  @Output() complete = new EventEmitter<void>();

  public session$ = this.trainingSessionsQuery.active$;
  public config: CountdownConfig = {};

  private activeSessionSub?: Subscription;
  private previousSessionId?: ID;

  constructor(
    private trainingSessionsQuery: TrainingSessionsQuery,
  ) { }

  ngOnInit(): void {
    this.setActiveSessionSub();
  }

  ngOnDestroy(): void {
    this.activeSessionSub?.unsubscribe();
  }

  public onEvent(event: CountdownEvent): void {
    switch (event.action) {
      case "done":
        this.onDone();
        return;
      default:
        //
    }
  }

  private setActiveSessionSub(): void {
    this.activeSessionSub = this.session$.subscribe(session => this.checkSetConfigFromSession(session));
  }

  private checkSetConfigFromSession(session: TrainingSession | undefined): void {
    if (session && this.previousSessionId !== session.id) {
      this.setConfigFromSession(session);
    }
  }

  private setConfigFromSession(session: TrainingSession): void {
    this.previousSessionId = session.id;
    this.config = {
      leftTime: session.config.targetTime,
    }
  }

  private onDone(): void {
    this.complete.emit();
  }
}

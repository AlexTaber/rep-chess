import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pack, PacksQuery } from 'src/app/packs/state';
import { SessionFormPayload } from '../session-form/state/session-form.store';
import { Session, SessionsService, TimeInSeconds } from '../state';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit, OnDestroy {
  private createSub?: Subscription;

  constructor(
    private sessionsService: SessionsService,
    private packsQuery: PacksQuery,
    private router: Router,
  ) { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.createSub?.unsubscribe();
  }

  public onSubmit(payload: SessionFormPayload): void {
    this.createSub = this.sessionsService.create(this.getSessionFromPayload(payload))
      .subscribe(session => this.navigateToSession(session));
  }

  private getSessionFromPayload(payload: SessionFormPayload): Partial<Session> {
    return {
      packId: (this.packsQuery.getActive() as Pack | undefined)?.id,
      config: {
        targetTime: payload.unlimitedMode ? undefined : this.getTimeFromPayload(payload)
      },
      exercises: [],
      time: 0,
    };
  }

  private getTimeFromPayload(payload: SessionFormPayload): TimeInSeconds {
    return payload.seconds + (payload.minutes * 60);
  }

  private navigateToSession(session: Session): void {
    this.router.navigate(["sessions", session.id]);
  }
}

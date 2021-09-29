import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pack, PacksQuery } from 'src/app/packs/state';
import { TrainingSessionFormPayload } from '../training-session-form/state/training-session-form.store';
import { TrainingSession, TrainingSessionsService, TimeInSeconds } from '../state';

@Component({
  selector: 'app-create-training-session',
  templateUrl: './create-training-session.component.html',
  styleUrls: ['./create-training-session.component.scss']
})
export class CreateTrainingSessionComponent implements OnInit, OnDestroy {
  private createSub?: Subscription;

  constructor(
    private sessionsService: TrainingSessionsService,
    private packsQuery: PacksQuery,
    private router: Router,
  ) { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.createSub?.unsubscribe();
  }

  public onSubmit(payload: TrainingSessionFormPayload): void {
    this.createSub = this.sessionsService.create(this.getTrainingSessionFromPayload(payload))
      .subscribe(session => this.navigateToTrainingSession(session));
  }

  private getTrainingSessionFromPayload(payload: TrainingSessionFormPayload): Partial<TrainingSession> {
    return {
      packId: (this.packsQuery.getActive() as Pack | undefined)?.id,
      config: {
        targetTime: payload.unlimitedMode ? undefined : this.getTimeFromPayload(payload)
      },
      exercises: [],
      time: 0,
    };
  }

  private getTimeFromPayload(payload: TrainingSessionFormPayload): TimeInSeconds {
    return payload.seconds + (payload.minutes * 60);
  }

  private navigateToTrainingSession(session: TrainingSession): void {
    this.router.navigate(["sessions", session.id]);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ID } from '@datorama/akita';
import { ExerciseAttempt } from 'src/app/exercises/state';
import { PacksQuery } from 'src/app/packs/state';
import { TimeInSeconds, TrainingSession, TrainingSessionsQuery, TrainingSessionsService } from '../state';
import { TrainingSessionFormQuery } from '../training-session-form/state';
import { TrainingSessionFormPayload } from '../training-session-form/state/training-session-form.store';

@Component({
  selector: 'app-training-session',
  templateUrl: './training-session.component.html',
  styleUrls: ['./training-session.component.scss']
})
export class TrainingSessionComponent implements OnInit {
  public session$ = this.sessionsQuery.active$;
  public pack$ = this.packsQuery.activePack$;

  private get payload(): TrainingSessionFormPayload {
    return this.sessionFormQuery.getValue().payload;
  }

  constructor(
    private sessionsService: TrainingSessionsService,
    private sessionsQuery: TrainingSessionsQuery,
    private sessionFormQuery: TrainingSessionFormQuery,
    private packsQuery: PacksQuery,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createSession();
  }

  public onExerciseComplete(attempt: ExerciseAttempt): void {
    this.sessionsService.addAttempt(attempt);
    this.setResults();
  }

  public onSessionComplete(attempt: ExerciseAttempt): void {
    this.onExerciseComplete(attempt);
    this.navigateToResults();
  }

  private createSession(): void {
    this.sessionsService.create(this.getTrainingSessionFromPayload())
      .subscribe(session => this.setActiveTrainingSession(session));
  }

  private getTrainingSessionFromPayload(): Partial<TrainingSession> {
    return {
      packId: this.getActivePackId(),
      config: {
        targetTime: this.payload.unlimitedMode ? undefined : this.getTimeFromPayload(this.payload)
      },
      attempts: [],
    };
  }

  private getTimeFromPayload(payload: TrainingSessionFormPayload): TimeInSeconds {
    return payload.seconds + (payload.minutes * 60);
  }

  private getActivePackId(): ID | undefined {
    return this.packsQuery.getActivePack()?.id;
  }

  private setActiveTrainingSession(session: TrainingSession): void {
    this.sessionsService.setActive(session.id);
  }

  private setResults(): void {
    this.sessionsService.setResults(this.sessionsQuery.getResults())
  }

  private navigateToResults(): void {
    this.router.navigate([this.sessionsQuery.getActiveId(), "results"]);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ID } from '@datorama/akita';
import { ExerciseAttempt } from 'src/app/exercises/state';
import { PackCyclesQuery, PackCyclesService } from 'src/app/pack-cycles/state';
import { PacksQuery, PacksService } from 'src/app/packs/state';
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
    private cyclesService: PackCyclesService,
    private cyclesQuery: PackCyclesQuery,
    private packsService: PacksService,
    private packsQuery: PacksQuery,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createSession();
    this.setActiveCycle();
  }

  public onExerciseComplete(attempt: ExerciseAttempt): void {
    this.addAttempt(attempt);
    this.setResults();
    this.checkStartNewCycle(attempt);
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

  private addAttempt(attempt: ExerciseAttempt): void {
    this.sessionsService.addAttempt(attempt);
    this.cyclesService.addAttempt(attempt);
  }

  private setResults(): void {
    this.sessionsService.setResults(this.sessionsQuery.getResults());
    this.cyclesService.setResults(this.cyclesQuery.getResults());
  }

  private setActiveCycle(): void {
    const activePackId = this.packsQuery.getActiveId();
    const activeCycle = this.cyclesQuery.getAll().find(cycle => cycle.packId === activePackId);
    activeCycle ? this.cyclesService.setActive(activeCycle.id) : this.createCycle();
  }

  private createCycle(): void {
    this.cyclesService.create(this.packsQuery.getActiveId())
      .subscribe(cycle => this.cyclesService.setActive(cycle.id));
  }

  private checkStartNewCycle(attempt: ExerciseAttempt): void {
    const exercises = this.packsQuery.getActivePack()?.exercises;
    const lastExercise = exercises?.[exercises?.length - 1];
    if (attempt.exerciseId === lastExercise?.id) {
      this.packsService.shuffle();
      this.createCycle();
    }
  }

  private navigateToResults(): void {
    this.router.navigate([this.sessionsQuery.getActiveId(), "results"]);
  }
}

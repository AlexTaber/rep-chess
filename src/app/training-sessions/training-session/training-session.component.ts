import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ID } from '@datorama/akita';
import { ExerciseAttempt, ExercisesService } from 'src/app/exercises/state';
import { PackCycle, PackCyclesQuery, PackCyclesService } from 'src/app/pack-cycles/state';
import { PacksQuery, PacksService } from 'src/app/packs/state';
import { TimeInSeconds, TrainingSession, TrainingSessionsQuery, TrainingSessionsService } from '../state';
import { TrainingSessionFormQuery } from '../training-session-form/state';
import { TrainingSessionFormPayload } from '../training-session-form/state/training-session-form.store';

@Component({
  selector: 'app-training-session',
  templateUrl: './training-session.component.html',
  styleUrls: ['./training-session.component.scss']
})
export class TrainingSessionComponent implements OnInit, AfterViewInit {
  public session$ = this.sessionsQuery.active$;
  public pack$ = this.packsQuery.activePack$;
  public cycle$ = this.cyclesQuery.active$;

  public showPackCycleComplete = false;

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
    private exercisesService: ExercisesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createSession();
  }

  ngAfterViewInit(): void {
    this.setActiveCycle();
  }

  public onExerciseComplete(attempt: ExerciseAttempt): void {
    this.addAttempt(attempt);
    this.setResults();
  }

  public onSessionComplete(attempt?: ExerciseAttempt): void {
    if (attempt) {
      this.onExerciseComplete(attempt);
    }
    this.navigateToResults();
  }

  public onStartNewCycle(): void {
    this.showPackCycleComplete = false;
    this.startNewCycle();
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
    const ongoingCycle = this.cyclesQuery.getOngoingCycle(activePackId);
    ongoingCycle ? this.loadCycle(ongoingCycle) : this.createCycle();
  }

  private createCycle(): void {
    this.cyclesService.create(this.packsQuery.getActiveId())
      .subscribe(cycle => this.cyclesService.setActive(cycle.id));
  }

  private loadCycle(cycle: PackCycle): void {
    this.cyclesService.setActive(cycle.id);
    const lastAttempt = cycle.attempts.find(attempt => attempt.status === "pending");
    if (lastAttempt) {
      this.exercisesService.setActive(lastAttempt.exerciseId);
    }
  }

  private startNewCycle(): void {
    this.packsService.resetExercises();
    this.createCycle();
  }

  private navigateToResults(): void {
    this.router.navigate([this.sessionsQuery.getActiveId(), "results"]);
  }
}

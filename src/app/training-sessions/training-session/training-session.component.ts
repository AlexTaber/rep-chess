import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ID } from '@datorama/akita';
import { Exercise, ExercisesQuery } from 'src/app/exercises/state';
import { Pack, PacksQuery } from 'src/app/packs/state';
import { TrainingSessionExercisesService } from 'src/app/training-session-exercises/state';
import { TimeInSeconds, TrainingSession, TrainingSessionsQuery, TrainingSessionsService } from '../state';
import { TrainingSessionFormQuery } from '../training-session-form/state';
import { TrainingSessionFormPayload } from '../training-session-form/state/training-session-form.store';

@Component({
  selector: 'app-training-session',
  templateUrl: './training-session.component.html',
  styleUrls: ['./training-session.component.scss']
})
export class TrainingSessionComponent implements OnInit {
  public session$ = this.sessionsQuery.selectActive();

  private get firstExercise(): Exercise | undefined {
    return this.exercisesQuery.getFirst();
  }

  private get nextExercise(): Exercise | undefined {
    return this.exercisesQuery.getNext() || this.firstExercise;
  }

  constructor(
    private sessionsService: TrainingSessionsService,
    private sessionsQuery: TrainingSessionsQuery,
    private sessionExercisesService: TrainingSessionExercisesService,
    private sessionFormQuery: TrainingSessionFormQuery,
    private packsQuery: PacksQuery,
    private exercisesQuery: ExercisesQuery,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createSession();
  }

  public onExerciseComplete(): void {
    this.createSessionExerciseFromExercise(this.nextExercise);
  }

  public onSessionComplete(): void {
    this.setResults();
    this.navigateToResults();
  }

  private createSession(): void {
    this.sessionsService.create(this.getTrainingSessionFromPayload())
      .subscribe(session => this.setActiveTrainingSession(session));
  }

  private getTrainingSessionFromPayload(): Partial<TrainingSession> {
    const payload = this.sessionFormQuery.getValue().payload;
    return {
      packId: this.getActivePackId(),
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

  private getActivePackId(): ID | undefined {
    return this.packsQuery.getActivePack()?.id;
  }

  private setActiveTrainingSession(session: TrainingSession): void {
    this.sessionsService.setActive(session.id);
    this.createSessionExerciseFromExercise(this.firstExercise);
  }

  private createSessionExerciseFromExercise(exercise: Exercise | undefined): void {
    this.sessionExercisesService.create({
      trainingSessionId: this.sessionsQuery.getActiveId(),
      exerciseId: exercise?.id,
    }).subscribe(exercise => this.sessionExercisesService.setActive(exercise.id));
  }

  private setResults(): void {
    this.sessionsService.setResults(this.sessionsQuery.getResults())
  }

  private navigateToResults(): void {
    this.router.navigate([this.sessionsQuery.getActiveId(), "results"]);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TrainingSessionFormQuery, TrainingSessionFormService } from './state';
import { TrainingSessionFormPayload } from './state/training-session-form.store';

@Component({
  selector: 'app-training-session-form',
  templateUrl: './training-session-form.component.html',
  styleUrls: ['./training-session-form.component.scss']
})
export class TrainingSessionFormComponent implements OnInit {
  @Output() submit = new EventEmitter<TrainingSessionFormPayload>();

  public payload$ = this.sessionsFormQuery.payload$;

  constructor(
    private sessionFormService: TrainingSessionFormService,
    private sessionsFormQuery: TrainingSessionFormQuery,
  ) { }

  ngOnInit(): void {}

  public updateMinutes(event: Event): void {
    this.updatePayload({ minutes: parseInt((event.target as HTMLInputElement).value) })
  }

  public updateSeconds(event: Event): void {
    this.updatePayload({ seconds: parseInt((event.target as HTMLInputElement).value) })
  }

  public onSubmit(payload: TrainingSessionFormPayload): void {
    this.submit.emit(payload);
  }

  private updatePayload(payload: Partial<TrainingSessionFormPayload>): void {
    this.sessionFormService.updatePayload(payload);
  }
}

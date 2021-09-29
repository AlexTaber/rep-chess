import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SessionFormQuery, SessionFormService } from './state';
import { SessionFormPayload } from './state/session-form.store';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.scss']
})
export class SessionFormComponent implements OnInit {
  @Output() submit = new EventEmitter<SessionFormPayload>();

  public payload$ = this.sessionsFormQuery.payload$;

  constructor(
    private sessionFormService: SessionFormService,
    private sessionsFormQuery: SessionFormQuery,
  ) { }

  ngOnInit(): void {}

  public updateMinutes(event: Event): void {
    this.updatePayload({ minutes: parseInt((event.target as HTMLInputElement).value) })
  }

  public updateSeconds(event: Event): void {
    this.updatePayload({ seconds: parseInt((event.target as HTMLInputElement).value) })
  }

  public onSubmit(payload: SessionFormPayload): void {
    this.submit.emit(payload);
  }

  private updatePayload(payload: Partial<SessionFormPayload>): void {
    this.sessionFormService.updatePayload(payload);
  }
}

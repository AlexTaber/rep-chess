import { Injectable } from '@angular/core';
import { SessionFormPayload, SessionFormStore } from './session-form.store';

@Injectable({ providedIn: 'root' })
export class SessionFormService {

  constructor(private sessionsFormStore: SessionFormStore) {}

  public updatePayload(diff: Partial<SessionFormPayload>): void {
    const payload = { ...this.sessionsFormStore.getValue().payload, ...diff };
    this.sessionsFormStore.update({ payload });
  }
}

import { Injectable } from '@angular/core';
import { TrainingSessionFormPayload, TrainingSessionFormStore } from './training-session-form.store';

@Injectable({ providedIn: 'root' })
export class TrainingSessionFormService {

  constructor(private sessionsFormStore: TrainingSessionFormStore) {}

  public updatePayload(diff: Partial<TrainingSessionFormPayload>): void {
    const payload = { ...this.sessionsFormStore.getValue().payload, ...diff };
    this.sessionsFormStore.update({ payload });
  }
}

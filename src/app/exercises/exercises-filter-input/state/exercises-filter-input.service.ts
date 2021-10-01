import { Injectable } from '@angular/core';
import { ExerciseTheme } from '../../state';
import { ExercisesFilterInputPayload, ExercisesFilterInputStore } from './exercises-filter-input.store';

@Injectable({ providedIn: 'root' })
export class ExercisesFilterInputService {

  constructor(private exercisesFilterInputStore: ExercisesFilterInputStore) {}

  public updateRatingRangeLow(low: number): void {
    const payload = this.exercisesFilterInputStore.getValue().payload;
    this.updatePayload({
      ratingRange: {
        ...payload.ratingRange,
        low,
      }
    });
  }

  public updateRatingRangeHigh(high: number): void {
    const payload = this.exercisesFilterInputStore.getValue().payload;
    this.updatePayload({
      ratingRange: {
        ...payload.ratingRange,
        high,
      }
    });
  }

  public updateLimit(limit: number): void {
    this.updatePayload({ limit });
  }

  public updateThemes(themes: ExerciseTheme[]): void {
    this.updatePayload({ themes });
  }

  private updatePayload(diff: Partial<ExercisesFilterInputPayload>): void {
    const payload = this.exercisesFilterInputStore.getValue().payload;
    this.exercisesFilterInputStore.update({
      payload: {
        ...payload,
        ...diff,
      }
    });
  }
}

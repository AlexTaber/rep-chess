import { Injectable } from "@angular/core";
import { shuffle } from "lodash";
import { ExerciseFilter, ExerciseRatingRange, ExerciseTheme, LichessExercise, MOCK_EXERCISES } from "src/app/exercises/state";

@Injectable({
  providedIn: "root",
})
export class MockedExercisesRepo {
  private exercises = MOCK_EXERCISES;

  public getMany(filter: ExerciseFilter): LichessExercise[] {
    let exercises = shuffle(this.exercises);
    exercises = this.checkApplyThemesFilter(exercises, filter);
    exercises = this.checkApplyRatingFilter(exercises, filter);
    return this.checkApplyLimit(exercises, filter.limit || 1000);
  }

  private checkApplyLimit(exercises: LichessExercise[], limit: number | undefined): LichessExercise[] {
    return limit ? exercises.slice(0, limit) : exercises;
  }

  private checkApplyThemesFilter(exercises: LichessExercise[], filter: ExerciseFilter): LichessExercise[] {
    return filter.themes?.length ? this.applyThemesFilter(exercises, filter.themes) : exercises;
  }

  private applyThemesFilter(exercises: LichessExercise[], themes: ExerciseTheme[]): LichessExercise[] {
    return exercises.filter(exercise => exercise.data.themes.some(r=> themes.includes(r)))
  }

  private checkApplyRatingFilter(exercises: LichessExercise[], filter: ExerciseFilter): LichessExercise[] {
    return filter.ratingRange ? this.applyRatingFilter(exercises, filter.ratingRange) : exercises;
  }

  private applyRatingFilter(exercises: LichessExercise[], ratingRange: ExerciseRatingRange): LichessExercise[] {
    return exercises.filter(exercise => exercise.data.rating >= ratingRange.low && exercise.data.rating <= ratingRange.high);
  }
}

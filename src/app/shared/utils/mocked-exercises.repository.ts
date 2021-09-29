import { Injectable } from "@angular/core";
import { ExerciseFilter, ExerciseRatingRange, ExerciseTheme, LichessExercise, MOCK_EXERCISES } from "src/app/exercises/state";

@Injectable({
  providedIn: "root",
})
export class MockedExercisesRepository {
  private exercises = MOCK_EXERCISES;

  public getMany(filter: ExerciseFilter): LichessExercise[] {
    let exercises = this.exercises;
    exercises = this.checkApplyThemesFilter(exercises, filter);
    return this.checkApplyRatingFilter(exercises, filter);
  }

  private checkApplyThemesFilter(exercises: LichessExercise[], filter: ExerciseFilter): LichessExercise[] {
    return filter.themes ? this.applyThemesFilter(exercises, filter.themes) : exercises;
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

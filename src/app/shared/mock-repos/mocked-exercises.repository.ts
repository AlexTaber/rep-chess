import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { shuffle } from "lodash";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ExerciseFilter, ExerciseRatingRange, ExerciseTheme, LichessExercise } from "src/app/exercises/state";
import { convertCsvStringToExercises } from "../utils/convert-csv-string-to-exercises";

@Injectable({
  providedIn: "root",
})
export class MockedExercisesRepo {
  constructor(
    private http: HttpClient,
  ) {}

  public getMany(exercises: LichessExercise[], filter: ExerciseFilter): LichessExercise[] {
    exercises = this.checkApplyThemesFilter(exercises, filter);
    exercises = this.checkApplyRatingFilter(exercises, filter);
    return this.checkApplyLimit(exercises, filter.limit || 1000);
  }

  public fetch(): Observable<LichessExercise[]> {
    return this.http.get("https://general-assets-324.s3.amazonaws.com/mock-exercises.csv",  {responseType: 'text'})
      .pipe(map(r => shuffle(convertCsvStringToExercises(r))));
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

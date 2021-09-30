import { convertCsvStringToExercises } from "src/app/shared/utils/convert-csv-string-to-exercises";
import { MOCK_CSVS } from "./mock-exercise-csvs";

export interface Exercise<T = ExerciseData> {
  id: string;
  data: T;
}

export interface ExerciseData {
  fen: string;
  moves: string[];
}

export type LichessExercise = Exercise<LichessExerciseData>;

export interface LichessExerciseData extends ExerciseData {
  puzzleId: string;
  rating: number;
  ratingDeviation: number;
  popularity: number;
  themes: ExerciseTheme[];
  gameUrl: string;
}

export interface ExerciseFilter {
  themes?: ExerciseTheme[];
  ratingRange?: ExerciseRatingRange;
}

export interface ExerciseRatingRange {
  low: number;
  high: number;
}

export type ExerciseTheme = "pin" | "fork" | "attraction" | "deflection";

export const MOCK_EXERCISES: LichessExercise[] = convertCsvStringToExercises(MOCK_CSVS[0]);

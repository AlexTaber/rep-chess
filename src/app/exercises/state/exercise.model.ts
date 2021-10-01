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
  limit?: number;
}

export interface ExerciseRatingRange {
  low: number;
  high: number;
}

export const exerciseThemes = [
  {
    key: "advancedPawn",
    name: "Advanced Pawn",
  },
  {
    key: "advantage",
    name: "Advantage",
  },
  {
    key: "anastasiaMate",
    name: "Anastasia Mate",
  },
  {
    key: "arabianMate",
    name: "Arabian Mate",
  },
  {
    key: "backRankMate",
    name: "Back Rank Mate",
  },
  {
    key: "bishopEndgame",
    name: "Bishop Endgame",
  },
  {
    key: "bodenMate",
    name: "Boden Mate",
  },
  {
    key: "castling",
    name: "Castling",
  },
  {
    key: "capturingDefender",
    name: "Capture the Defender",
  },
  {
    key: "pin",
    name: "Pin",
  },
  {
    name: "Fork",
    key: "fork",
  },
  {
    name: "Attraction",
    key: "attraction",
  },
  {
    name: "Deflection",
    key: "deflection",
  }
] as const;

export type ExerciseTheme = typeof exerciseThemes[number]["key"];

export const MOCK_EXERCISES: LichessExercise[] = convertCsvStringToExercises(MOCK_CSVS[0]);

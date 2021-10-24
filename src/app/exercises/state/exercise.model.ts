import { ID } from "@datorama/akita";
import { convertCsvStringToExercises } from "src/app/shared/utils/convert-csv-string-to-exercises";
import { TimeInSeconds } from "src/app/training-sessions/state";
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

export interface ExerciseCollection {
  id: ID;
  packId: ID;
  startTime: Date;
  attempts: ExerciseAttempt[];
  results: ExerciseResults;
}

export interface ExerciseAttempt {
  id: ID;
  exerciseId: ID;
  status: ExerciseAttemptStatus;
  time: TimeInSeconds;
}

export type ExerciseAttemptStatus = "pass" | "fail" | "pending";

export interface ExerciseResults {
  successes: number;
  failures: number;
  time: TimeInSeconds;
}

export const exerciseThemes = [
  {
    "key": "advancedPawn",
    "name": "Advanced pawn"
  },
  {
    "key": "advantage",
    "name": "Advantage"
  },
  {
    "key": "anastasiaMate",
    "name": "Anastasia's mate"
  },
  {
    "key": "arabianMate",
    "name": "Arabian mate"
  },
  {
    "key": "attackingF2F7",
    "name": "Attacking f2 or f7"
  },
  {
    "key": "attraction",
    "name": "Attraction"
  },
  {
    "key": "backRankMate",
    "name": "Back rank mate"
  },
  {
    "key": "bishopEndgame",
    "name": "Bishop endgame"
  },
  {
    "key": "bodenMate",
    "name": "Boden's mate"
  },
  {
    "key": "capturingDefender",
    "name": "Capture the defender"
  },
  {
    "key": "castling",
    "name": "Castling"
  },
  {
    "key": "mate",
    "name": "Checkmate"
  },
  {
    "key": "clearance",
    "name": "Clearance"
  },
  {
    "key": "crushing",
    "name": "Crushing"
  },
  {
    "key": "defensiveMove",
    "name": "Defensive move"
  },
  {
    "key": "deflection",
    "name": "Deflection"
  },
  {
    "key": "discoveredAttack",
    "name": "Discovered attack"
  },
  {
    "key": "doubleBishopMate",
    "name": "Double bishop mate"
  },
  {
    "key": "doubleCheck",
    "name": "Double check"
  },
  {
    "key": "dovetailMate",
    "name": "Dovetail mate"
  },
  {
    "key": "endgame",
    "name": "Endgame"
  },
  {
    "key": "equality",
    "name": "Equality"
  },
  {
    "key": "exposedKing",
    "name": "Exposed king"
  },
  {
    "key": "fork",
    "name": "Fork"
  },
  {
    "key": "hangingPiece",
    "name": "Hanging piece"
  },
  {
    "key": "hookMate",
    "name": "Hook mate"
  },
  {
    "key": "interference",
    "name": "Interference"
  },
  {
    "key": "intermezzo",
    "name": "Intermezzo"
  },
  {
    "key": "kingsideAttack",
    "name": "Kingside attack"
  },
  {
    "key": "knightEndgame",
    "name": "Knight endgame"
  },
  {
    "key": "long",
    "name": "Long puzzle"
  },
  {
    "key": "master",
    "name": "Master games"
  },
  {
    "key": "masterVsMaster",
    "name": "Master vs Master games"
  },
  {
    "key": "mateIn1",
    "name": "Mate in 1"
  },
  {
    "key": "mateIn2",
    "name": "Mate in 2"
  },
  {
    "key": "mateIn3",
    "name": "Mate in 3"
  },
  {
    "key": "mateIn4",
    "name": "Mate in 4"
  },
  {
    "key": "mateIn5",
    "name": "Mate in 5 or more"
  },
  {
    "key": "middlegame",
    "name": "Middlegame"
  },
  {
    "key": "oneMove",
    "name": "One-move puzzle"
  },
  {
    "key": "opening",
    "name": "Opening"
  },
  {
    "key": "pawnEndgame",
    "name": "Pawn endgame"
  },
  {
    "key": "pin",
    "name": "Pin"
  },
  {
    "key": "promotion",
    "name": "Promotion"
  },
  {
    "key": "queenRookEndgame",
    "name": "Queen and Rook"
  },
  {
    "key": "queenEndgame",
    "name": "Queen endgame"
  },
  {
    "key": "queensideAttack",
    "name": "Queenside attack"
  },
  {
    "key": "quietMove",
    "name": "Quiet move"
  },
  {
    "key": "rookEndgame",
    "name": "Rook endgame"
  },
  {
    "key": "sacrifice",
    "name": "Sacrifice"
  },
  {
    "key": "short",
    "name": "Short puzzle"
  },
  {
    "key": "skewer",
    "name": "Skewer"
  },
  {
    "key": "smotheredMate",
    "name": "Smothered mate"
  },
  {
    "key": "superGM",
    "name": "Super GM games"
  },
  {
    "key": "trappedPiece",
    "name": "Trapped piece"
  },
  {
    "key": "underPromotion",
    "name": "Underpromotion"
  },
  {
    "key": "veryLong",
    "name": "Very long puzzle"
  },
  {
    "key": "xRayAttack",
    "name": "X-Ray attack"
  },
  {
    "key": "zugzwang",
    "name": "Zugzwang"
  }
] as const;

export type ExerciseTheme = typeof exerciseThemes[number]["key"];

export const MOCK_EXERCISES: LichessExercise[] = convertCsvStringToExercises(MOCK_CSVS[0]);

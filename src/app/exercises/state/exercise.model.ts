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
  themes: string[];
  gameUrl: string;
}

export const MOCK_EXERCISES: LichessExercise[] = [
  {
    id: "jgjdkdalja",
    data: {
      puzzleId: "0000D",
      fen: "5rk1/1p3ppp/pq3b2/8/8/1P1Q1N2/P4PPP/3R2K1 w - - 2 27",
      moves: [
        "d3d6",
        "f8d8",
        "d6d8",
        "f6d8",
      ],
      rating: 1426,
      ratingDeviation: 500,
      popularity: 2,
      themes: [
        "advantage", "endgame", "short",
      ],
      gameUrl: "https://lichess.org/F8M8OS71#53",
    }
  },

  {
    id: "dgslkjgkajd",
    data: {
      puzzleId: "0009B",
      fen: "r2qr1k1/b1p2ppp/pp4n1/P1P1p3/4P1n1/B2P2Pb/3NBP1P/RN1QR1K1 b - - 1 16",
      moves: [
        "b6c5", "e2g4", "h3g4", "d1g4",
      ],
      rating: 1500,
      ratingDeviation: 500,
      popularity: 2,
      themes: [
        "advantage", "middlegame", "short",
      ],
      gameUrl: "https://lichess.org/F8M8OS71#53",
    }
  },
]
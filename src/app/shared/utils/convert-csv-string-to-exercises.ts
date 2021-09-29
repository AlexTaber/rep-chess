import { guid } from "@datorama/akita";
import { LichessExercise } from "src/app/exercises/state";

declare var require: any

const CSV = require('csv-string');

export const convertCsvStringToExercises = (csvString: string): LichessExercise[] => {
  const parsedCsv = CSV.parse(csvString);
  return parsedCsv.map((row: string[]) => convertRowToExercise(row));
}

const convertRowToExercise = (row: string[]): LichessExercise => {
  return {
    id: guid(),
    data: {
      puzzleId: row[0],
      fen: row[1],
      moves: row[2].split(" "),
      rating: parseInt(row[3]),
      ratingDeviation: parseInt(row[4]),
      popularity: parseInt(row[5]),
      themes: row[7].split(" "),
      gameUrl: row[8],
    }
  }
}

import { TimeInSeconds } from "src/app/training-sessions/state";
import { ExerciseCollection, ExerciseResults } from ".";

export function getResultsFromExerciseCollection(collection: ExerciseCollection): ExerciseResults {
  return {
    time: getCollectionTime(collection),
    ...getResultsCountsFromAttempts(collection),
  } as ExerciseResults;
}

function getCollectionTime(collection: ExerciseCollection): TimeInSeconds {
  return Math.ceil((new Date().getTime() - new Date(collection.startTime).getTime()) / 1000);
}

function getResultsCountsFromAttempts(collection: ExerciseCollection): Partial<ExerciseResults> {
  return {
    successes: collection.attempts.filter(attempt => attempt.status === "pass").length,
    failures: collection.attempts.filter(attempt => attempt.status === "fail").length,
    time: collection.attempts.reduce((time, attempt) => time + attempt.time, 0),
  }
}

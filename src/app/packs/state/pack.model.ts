import { ID } from "@datorama/akita";
import { Exercise, ExerciseFilter } from "src/app/exercises/state/exercise.model";

export interface Pack {
  id: ID;
  name: string;
  exercises: Exercise[];
  subscribed: boolean;
  data: PackMetadata;
}

type PackMetadata = Pick<ExerciseFilter, "ratingRange" | "themes">;

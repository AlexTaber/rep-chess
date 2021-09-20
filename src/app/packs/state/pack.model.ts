import { ID } from "@datorama/akita";
import { Exercise, MOCK_EXERCISES } from "src/app/exercises/state/exercise.model";

export interface Pack {
  id: ID;
  name: string;
  exercises: Exercise[];
}

export const MOCK_PACKS: Pack[] = [
  {
    id: "adklfjaldsf",
    name: "Test Pack",
    exercises: MOCK_EXERCISES,
  },

  {
    id: "asdgdgasads",
    name: "Test Pack 2",
    exercises: MOCK_EXERCISES,
  }
]

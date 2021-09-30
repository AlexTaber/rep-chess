import { ID } from "@datorama/akita";
import { Exercise } from "src/app/exercises/state/exercise.model";
import { MockedExercisesRepository } from "src/app/shared/utils/mocked-exercises.repository";

export interface Pack {
  id: ID;
  name: string;
  exercises: Exercise[];
}

const repo = new MockedExercisesRepository();

export const MOCK_PACKS: Pack[] = [
  {
    id: "adklfjaldsf",
    name: "Easy Peasy",
    exercises: repo.getMany({
      ratingRange: {
        low: 800,
        high: 1000,
      },
    }),
  },

  {
    id: "asdgdgasads",
    name: "Pins Galore!",
    exercises: repo.getMany({
      themes: ["pin"],
      ratingRange: {
        low: 1500,
        high: 2100,
      }
    }),
  }
]

import { ID } from "@datorama/akita";
import { Exercise } from "src/app/exercises/state/exercise.model";
import { MockedExercisesRepo } from "src/app/shared/mock-repos/mocked-exercises.repository";
import { packSubscriptionsRepo } from "src/app/shared/mock-repos/mocked-pack-subscriptions.repository";

export interface Pack {
  id: ID;
  name: string;
  exercises: Exercise[];
  subscribed: boolean;
}

const repo = new MockedExercisesRepo();

export const MOCK_PACKS: Pack[] = [
  {
    id: "adklfjaldsf",
    name: "Easy Forks",
    exercises: repo.getMany({
      themes: ["fork"],
      ratingRange: {
        low: 800,
        high: 1000,
      },
    }),
    subscribed: false,
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
    subscribed: false,
  }
]

packSubscriptionsRepo.addMany(MOCK_PACKS.map(pack => pack.id).slice(0, 1));

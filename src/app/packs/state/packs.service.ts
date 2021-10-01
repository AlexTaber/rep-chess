import { Injectable } from '@angular/core';
import { guid, ID } from '@datorama/akita';
import { MockedExercisesRepository } from 'src/app/shared/utils/mocked-exercises.repository';
import { MOCK_PACKS } from '.';
import { PacksFormPayload } from '../packs-form/state/packs-form.store';
import { PacksStore } from './packs.store';

@Injectable({ providedIn: 'root' })
export class PacksService {

  constructor(
    private packsStore: PacksStore,
    private repo: MockedExercisesRepository,
  ) {}

  public fetch(): void {
    this.packsStore.set(MOCK_PACKS);
  }

  public setActive(id: ID): void {
    this.packsStore.setActive(id);
  }

  public create(payload: PacksFormPayload): void {
    const exercises = this.repo.getMany(payload.filter);
    this.packsStore.add({
      id: guid(),
      name: payload.name,
      exercises,
    });
  }
}

import { Injectable } from '@angular/core';
import { guid, ID } from '@datorama/akita';
import { shuffle } from 'lodash';
import { MockedExercisesRepo } from 'src/app/shared/mock-repos/mocked-exercises.repository';
import { packSubscriptionsRepo } from 'src/app/shared/mock-repos/mocked-pack-subscriptions.repository';
import { MOCK_PACKS, PacksQuery } from '.';
import { PacksFormPayload } from '../packs-form/state/packs-form.store';
import { PacksStore } from './packs.store';

@Injectable({ providedIn: 'root' })
export class PacksService {

  constructor(
    private packsStore: PacksStore,
    private packsQuery: PacksQuery,
    private repo: MockedExercisesRepo,
  ) {}

  public fetch(): void {
    const subbedIds = packSubscriptionsRepo.getMany().map(sub => sub.packId);
    this.packsStore.set(MOCK_PACKS.map(pack => ({
      ...pack,
      subscribed: subbedIds.includes(pack.id),
    })));
  }

  public setActive(id: ID): void {
    this.packsStore.setActive(id);
  }

  public create(payload: PacksFormPayload): void {
    const exercises = this.repo.getMany(payload.filter);
    const pack = {
      id: guid(),
      name: payload.name,
      exercises,
      subscribed: true,
      data: payload.filter,
    }
    this.packsStore.add(pack);
    packSubscriptionsRepo.add(pack.id);
  }

  public subscribe(id: ID): void {
    this.packsStore.update(id, { subscribed: true });
    packSubscriptionsRepo.add(id);
  }

  public unsubscribe(id: ID): void {
    this.packsStore.update(id, { subscribed: false });
    packSubscriptionsRepo.remove(id);
  }

  public shuffle(): void {
    const exercises = this.packsQuery.getActivePack()?.exercises || [];
    this.packsStore.updateActive({ exercises: shuffle(exercises) });
  }
}

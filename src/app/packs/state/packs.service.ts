import { Injectable } from '@angular/core';
import { guid, ID } from '@datorama/akita';
import { shuffle } from 'lodash';
import { MockedExercisesRepo } from 'src/app/shared/mock-repos/mocked-exercises.repository';
import { packSubscriptionsRepo } from 'src/app/shared/mock-repos/mocked-pack-subscriptions.repository';
import { PacksQuery } from '.';
import { PacksFormPayload } from '../packs-form/state/packs-form.store';
import { Pack } from './pack.model';
import { PacksStore } from './packs.store';

@Injectable({ providedIn: 'root' })
export class PacksService {

  constructor(
    private packsStore: PacksStore,
    private packsQuery: PacksQuery,
    private repo: MockedExercisesRepo,
  ) {}

  public fetch(): void {
    this.setInitial();
  }

  public setActive(id: ID): void {
    this.packsStore.setActive(id);
  }

  public create(payload: PacksFormPayload): void {
    this.repo.fetch().subscribe(exercises => {
      exercises = this.repo.getMany(exercises, payload.filter);
      const pack = {
        id: guid(),
        name: payload.name,
        exercises,
        subscribed: true,
        data: payload.filter,
      }
      this.packsStore.add(pack);
      packSubscriptionsRepo.add(pack.id);
    });
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

  public resetExercises(): void {
    const exercises = [ ...this.packsQuery.getActivePack()?.exercises || [] ];
    this.packsStore.updateActive({ exercises });
  }

  private setInitial(): void {
    this.repo.fetch().subscribe(exercises => {
      const packs = [
        {
          id: guid(),
          name: "Easy Forks",
          exercises: this.repo.getMany(exercises, {
            themes: ["fork"],
            ratingRange: {
              low: 800,
              high: 1000,
            },
            limit: 100,
          }),
          subscribed: false,
          data: {
            themes: ["fork"],
            ratingRange: {
              low: 800,
              high: 1000,
            },
          }
        },
      
        {
          id: guid(),
          name: "Pins Galore!",
          exercises: this.repo.getMany(exercises, {
            themes: ["pin"],
            ratingRange: {
              low: 1500,
              high: 2100,
            },
            limit: 100,
          }),
          subscribed: false,
          data: {
            themes: ["pin"],
            ratingRange: {
              low: 1500,
              high: 2100,
            }
          }
        }
      ];
  
      packSubscriptionsRepo.addMany(packs.map(pack => pack.id).slice(0, 1));
      this.packsStore.set(packs as Pack[]);
      const subbedIds = packSubscriptionsRepo.getMany().map(sub => sub.packId);
      this.packsStore.set(this.packsQuery.getAll().map(pack => ({
        ...pack,
        subscribed: subbedIds.includes(pack.id),
      })));
    });
  }
}

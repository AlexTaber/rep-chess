import { arrayAdd, arrayRemove, guid, ID } from "@datorama/akita";

interface PackSubscription {
  id: ID;
  packId: ID;
}

class MockedPackSubscriptionsRepo {
  private subs: PackSubscription[] = [];

  public getMany(): PackSubscription[] {
    return this.subs;
  }

  public addMany(packIds: ID[]): void {
    packIds.forEach(id => this.add(id));
  }

  public add(packId: ID): void {
    this.subs = arrayAdd(this.subs, { id: guid(), packId });
  }

  public remove(packId: ID): void {
    this.subs = arrayRemove(this.subs, sub => sub.packId === packId);
  }
}

export const packSubscriptionsRepo = new MockedPackSubscriptionsRepo();

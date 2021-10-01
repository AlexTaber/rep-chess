import { Component, Input, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';
import { packSubscriptionsRepo } from 'src/app/shared/mock-repos/mocked-pack-subscriptions.repository';
import { Pack, PacksService } from '../state';

@Component({
  selector: 'app-toggle-pack-subscription',
  templateUrl: './toggle-pack-subscription.component.html',
  styleUrls: ['./toggle-pack-subscription.component.scss']
})
export class TogglePackSubscriptionComponent implements OnInit {
  @Input() pack?: Pack;

  constructor(
    private packsService: PacksService,
  ) { }

  ngOnInit(): void {}

  public onSubscribe(packId: ID): void {
    this.packsService.subscribe(packId);
  }

  public onUnsubscribe(packId: ID): void {
    this.packsService.unsubscribe(packId);
  }
}

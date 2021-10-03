import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ID } from '@datorama/akita';
import { PacksService } from '../state';

@Component({
  selector: 'app-pack-results-page',
  templateUrl: './pack-results-page.component.html',
  styleUrls: ['./pack-results-page.component.scss']
})
export class PackResultsPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private packsService: PacksService,
  ) { }

  ngOnInit(): void {
    this.subscribeToRouteParams();
  }

  private subscribeToRouteParams(): void {
    this.route.params.subscribe(params => this.onSetPackId(params.packId));
  }

  private onSetPackId(packId: ID): void {
    this.packsService.setActive(packId);
  }
}

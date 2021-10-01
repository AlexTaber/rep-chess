import { Component, OnInit } from '@angular/core';
import { PacksQuery } from '../state';

@Component({
  selector: 'app-packs-dashboard',
  templateUrl: './packs-dashboard.component.html',
  styleUrls: ['./packs-dashboard.component.scss']
})
export class PacksDashboardComponent implements OnInit {
  public subscribedPacks$ = this.packsQuery.subscribedPacks$;
  public unsubscribedPacks$ = this.packsQuery.unsubscribedPacks$;

  constructor(
    private packsQuery: PacksQuery,
  ) { }

  ngOnInit(): void {}
}

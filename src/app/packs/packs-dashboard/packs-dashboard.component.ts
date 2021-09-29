import { Component, OnInit } from '@angular/core';
import { PacksQuery, PacksService } from '../state';

@Component({
  selector: 'app-packs-dashboard',
  templateUrl: './packs-dashboard.component.html',
  styleUrls: ['./packs-dashboard.component.scss']
})
export class PacksDashboardComponent implements OnInit {
  public packs$ = this.packsQuery.packs$;

  constructor(
    private packsQuery: PacksQuery,
  ) { }

  ngOnInit(): void {}
}

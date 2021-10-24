import { Component, OnInit } from '@angular/core';
import { PackCyclesQuery } from '../pack-cycles/state';

@Component({
  selector: 'app-stats-dashboard',
  templateUrl: './stats-dashboard.component.html',
  styleUrls: ['./stats-dashboard.component.scss']
})
export class StatsDashboardComponent implements OnInit {
  public cycles$ = this.cyclesQuery.completedCycles$;

  constructor(
    private cyclesQuery: PackCyclesQuery,
  ) { }

  ngOnInit(): void {
  }

}

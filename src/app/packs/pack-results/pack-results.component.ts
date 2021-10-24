import { Component, OnInit } from '@angular/core';
import { PackCyclesQuery } from 'src/app/pack-cycles/state';
import { TrainingSessionsQuery } from 'src/app/training-sessions/state';

@Component({
  selector: 'app-pack-results',
  templateUrl: './pack-results.component.html',
  styleUrls: ['./pack-results.component.scss']
})
export class PackResultsComponent implements OnInit {
  public sessions$ = this.sessionsQuery.activePackSessions$;
  public cycles$ = this.cyclesQuery.activeCompleteCycles$

  constructor(
    private sessionsQuery: TrainingSessionsQuery,
    private cyclesQuery: PackCyclesQuery,
  ) { }

  ngOnInit(): void {}
}

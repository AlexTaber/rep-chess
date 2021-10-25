import { Component, Input, OnInit } from '@angular/core';
import { PackCyclesQuery } from '../../pack-cycles/state';
import { TrainingSessionsQuery } from '../state';

@Component({
  selector: 'app-training-session-results',
  templateUrl: './training-session-results.component.html',
  styleUrls: ['./training-session-results.component.scss']
})
export class TrainingSessionResultsComponent implements OnInit {
  @Input() columns = 3;

  public session$ = this.sessionsQuery.active$;
  public cycle$ = this.cyclesQuery.active$;

  constructor(
    private sessionsQuery: TrainingSessionsQuery,
    private cyclesQuery: PackCyclesQuery,
  ) { }

  ngOnInit(): void {}
}

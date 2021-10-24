import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PackCycle, PackCyclesQuery } from 'src/app/pack-cycles/state';
import { Pack, PacksQuery } from '../state';

@Component({
  selector: 'app-pack-card',
  templateUrl: './pack-card.component.html',
  styleUrls: ['./pack-card.component.scss']
})
export class PackCardComponent implements OnInit {
  @Input() pack: Pack = {} as Pack;

  public completeCycles$?: Observable<PackCycle[]>;
  public ongoingCycle$?: Observable<PackCycle | undefined>;

  constructor(
    private cyclesQuery: PackCyclesQuery,
    private packsQuery: PacksQuery,
  ) {

  }

  ngOnInit(): void {
    this.completeCycles$ = this.cyclesQuery.selectCompletedByPackId(this.pack.id);
    this.ongoingCycle$ = this.cyclesQuery.selectOngoingByPackId(this.pack.id);
  }

  public getCompletedPerc(cycle: PackCycle | undefined): string {
    const completed = cycle?.attempts.filter(attempt => attempt.status !== "pending").length || 0;
    const exerciseCount = this.packsQuery.getEntity(cycle?.packId)?.exercises.length || 1;
    return `${Math.round((completed / exerciseCount) * 100)}%`;
  }
}

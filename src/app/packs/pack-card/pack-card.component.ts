import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PackCycle, PackCyclesQuery } from 'src/app/pack-cycles/state';
import { Pack } from '../state';

@Component({
  selector: 'app-pack-card',
  templateUrl: './pack-card.component.html',
  styleUrls: ['./pack-card.component.scss']
})
export class PackCardComponent implements OnInit {
  @Input() pack: Pack = {} as Pack;

  private cycles$: Observable<PackCycle[]> | undefined;

  constructor(
    private cyclesQuery: PackCyclesQuery,
  ) { }

  ngOnInit(): void {
    this.cycles$ = this.cyclesQuery.selectByPackId(this.pack.id);
  }
}

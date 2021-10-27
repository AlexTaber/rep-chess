import { Component, Input, OnInit } from '@angular/core';
import { PackCycle } from '../state';

@Component({
  selector: 'app-pack-cycle-complete',
  templateUrl: './pack-cycle-complete.component.html',
  styleUrls: ['./pack-cycle-complete.component.scss']
})
export class PackCycleCompleteComponent implements OnInit {
  @Input() cycle: PackCycle | undefined;

  constructor() { }

  ngOnInit(): void {}
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PackCycle } from '../state';

@Component({
  selector: 'app-pack-cycle-complete',
  templateUrl: './pack-cycle-complete.component.html',
  styleUrls: ['./pack-cycle-complete.component.scss']
})
export class PackCycleCompleteComponent implements OnInit {
  @Input() cycle: PackCycle | undefined;

  @Output() complete = new EventEmitter<void>();
  @Output() continue = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {}

  public onComplete(): void {
    this.complete.emit();
  }

  public onContinue(): void {
    this.continue.emit();
  }
}

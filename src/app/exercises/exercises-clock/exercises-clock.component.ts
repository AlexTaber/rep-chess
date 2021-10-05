import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';

@Component({
  selector: 'app-exercises-clock',
  templateUrl: './exercises-clock.component.html',
  styleUrls: ['./exercises-clock.component.scss']
})
export class ExercisesClockComponent implements OnInit {
  @Input() config?: CountdownConfig;

  @Output() complete = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {}

  public onEvent(event: CountdownEvent): void {
    switch (event.action) {
      case "done":
        this.onDone();
        return;
      default:
        //
    }
  }

  private onDone(): void {
    this.complete.emit();
  }
}

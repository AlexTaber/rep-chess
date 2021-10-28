import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() hideClose = false;

  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {}

  public onClose() {
    this.close.emit();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Pack } from '../state';

@Component({
  selector: 'app-pack-card',
  templateUrl: './pack-card.component.html',
  styleUrls: ['./pack-card.component.scss']
})
export class PackCardComponent implements OnInit {
  @Input() pack: Pack = {} as Pack;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {
  @HostBinding('style.grid-column')
  get colSpanString(): string {
    return this.getColSpan();
  }


  @Input() colSpan = 1;

  constructor() { }

  ngOnInit(): void {}

  public getColSpan(): string {
    return `span ${this.colSpan}`
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridItemComponent } from './grid-item.component';



@NgModule({
  declarations: [
    GridItemComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridItemComponent,
  ]
})
export class GridItemModule { }

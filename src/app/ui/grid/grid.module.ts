import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { GridItemModule } from './grid-item/grid-item.module';
import { MediaModule } from '../media/media.module';



@NgModule({
  declarations: [
    GridComponent,
  ],
  imports: [
    CommonModule,
    MediaModule,
    GridItemModule,
  ],
  exports: [
    GridComponent,
    GridItemModule,
  ]
})
export class GridModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsivePipe } from './responsive.pipe';



@NgModule({
  declarations: [
    ResponsivePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResponsivePipe
  ]
})
export class MediaModule { }

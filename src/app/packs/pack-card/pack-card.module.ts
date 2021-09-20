import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { PackCardComponent } from './pack-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PackCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
  ],
  exports: [
    PackCardComponent
  ]
})
export class PackCardModule { }

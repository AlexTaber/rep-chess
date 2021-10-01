import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerNavComponent } from './drawer-nav.component';
import { MatListModule } from "@angular/material/list";
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DrawerNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
  ],
  exports: [
    DrawerNavComponent
  ]
})
export class DrawerNavModule { }

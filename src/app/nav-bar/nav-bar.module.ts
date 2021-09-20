import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { NavBarComponent } from './nav-bar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    NavBarComponent,
  ]
})
export class NavBarModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { PackCardComponent } from './pack-card.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TogglePackSubscriptionModule } from '../toggle-pack-subscription/toggle-pack-subscription.module';
import { GridModule } from 'src/app/ui/grid/grid.module';



@NgModule({
  declarations: [
    PackCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    GridModule,
    RouterModule,
    TogglePackSubscriptionModule,
  ],
  exports: [
    PackCardComponent
  ]
})
export class PackCardModule { }

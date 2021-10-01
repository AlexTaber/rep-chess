import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TogglePackSubscriptionComponent } from './toggle-pack-subscription.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    TogglePackSubscriptionComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    TogglePackSubscriptionComponent
  ]
})
export class TogglePackSubscriptionModule { }

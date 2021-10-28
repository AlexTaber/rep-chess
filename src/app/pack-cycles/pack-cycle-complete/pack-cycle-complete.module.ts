import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackCycleCompleteComponent } from './pack-cycle-complete.component';
import { StatsResultsModule } from '../../stats/stats-results/stats-results.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    PackCycleCompleteComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    StatsResultsModule,
  ],
  exports: [
    PackCycleCompleteComponent
  ]
})
export class PackCycleCompleteModule { }

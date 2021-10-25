import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSessionResultsComponent } from './training-session-results.component';
import { StatsResultsModule } from '../../stats/stats-results/stats-results.module';



@NgModule({
  declarations: [
    TrainingSessionResultsComponent
  ],
  imports: [
    CommonModule,
    StatsResultsModule,
  ],
  exports: [
    TrainingSessionResultsComponent
  ]
})
export class TrainingSessionResultsModule { }

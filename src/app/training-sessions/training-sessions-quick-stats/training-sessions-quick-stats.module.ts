import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSessionsQuickStatsComponent } from './training-sessions-quick-stats.component';
import { MatCardModule } from '@angular/material/card';
import { GridModule } from 'src/app/ui/grid/grid.module';



@NgModule({
  declarations: [
    TrainingSessionsQuickStatsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    GridModule,
  ],
  exports: [
    TrainingSessionsQuickStatsComponent
  ]
})
export class TrainingSessionsQuickStatsModule { }

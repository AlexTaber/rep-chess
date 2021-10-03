import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackResultsComponent } from './pack-results.component';
import { PackSecondsPerSuccessChartModule } from '../pack-seconds-per-success-chart/pack-seconds-per-success-chart.module';
import { PackAccuracyChartModule } from '../pack-accuracy-chart/pack-accuracy-chart.module';
import { GridModule } from 'src/app/ui/grid/grid.module';
import { TrainingSessionsQuickStatsModule } from 'src/app/training-sessions/training-sessions-quick-stats/training-sessions-quick-stats.module';
import { TrainingSessionsCalendarModule } from 'src/app/training-sessions/training-sessions-calendar/training-sessions-calendar.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    PackResultsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    GridModule,
    PackSecondsPerSuccessChartModule,
    PackAccuracyChartModule,
    TrainingSessionsQuickStatsModule,
    TrainingSessionsCalendarModule,
  ],
  exports: [
    PackResultsComponent
  ]
})
export class PackResultsModule { }

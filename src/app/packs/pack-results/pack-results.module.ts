import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackResultsComponent } from './pack-results.component';
import { PackAccuracyChartModule } from '../pack-accuracy-chart/pack-accuracy-chart.module';
import { GridModule } from 'src/app/ui/grid/grid.module';
import { TrainingSessionsQuickStatsModule } from 'src/app/training-sessions/training-sessions-quick-stats/training-sessions-quick-stats.module';
import { TrainingSessionsCalendarModule } from 'src/app/training-sessions/training-sessions-calendar/training-sessions-calendar.module';
import { MatCardModule } from '@angular/material/card';
import { TrainingSessionsSuccessesPerMinuteModule } from 'src/app/training-sessions/training-sessions-successes-per-minute/training-sessions-successes-per-minute.module';


@NgModule({
  declarations: [
    PackResultsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    GridModule,
    PackAccuracyChartModule,
    TrainingSessionsQuickStatsModule,
    TrainingSessionsCalendarModule,
    TrainingSessionsSuccessesPerMinuteModule,
  ],
  exports: [
    PackResultsComponent
  ]
})
export class PackResultsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsDashboardRoutingModule } from './stats-dashboard-routing.module';
import { ContainerModule } from '../ui/container/container.module';
import { StatsDashboardComponent } from './stats-dashboard.component';
import { TrainingSessionsCalendarModule } from '../training-sessions/training-sessions-calendar/training-sessions-calendar.module';
import { GridModule } from '../ui/grid/grid.module';
import { TrainingSessionsQuickStatsModule } from '../training-sessions/training-sessions-quick-stats/training-sessions-quick-stats.module';
import { TrainingSessionsScatterBarChartModule } from '../training-sessions/training-sessions-scatter-bar-chart/training-sessions-scatter-bar-chart.module';


@NgModule({
  declarations: [
    StatsDashboardComponent,
  ],
  imports: [
    CommonModule,
    StatsDashboardRoutingModule,
    ContainerModule,
    GridModule,
    TrainingSessionsQuickStatsModule,
    TrainingSessionsCalendarModule,
    TrainingSessionsScatterBarChartModule,
  ]
})
export class StatsDashboardModule { }

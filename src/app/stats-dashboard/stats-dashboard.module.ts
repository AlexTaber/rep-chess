import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsDashboardRoutingModule } from './stats-dashboard-routing.module';
import { ContainerModule } from '../ui/container/container.module';
import { QuickStatsModule } from './quick-stats/quick-stats.module';
import { StatsDashboardComponent } from './stats-dashboard.component';
import { TrainingSessionsCalendarModule } from '../training-sessions/training-sessions-calendar/training-sessions-calendar.module';
import { GridModule } from '../ui/grid/grid.module';


@NgModule({
  declarations: [
    StatsDashboardComponent,
  ],
  imports: [
    CommonModule,
    StatsDashboardRoutingModule,
    ContainerModule,
    GridModule,
    QuickStatsModule,
    TrainingSessionsCalendarModule,
  ]
})
export class StatsDashboardModule { }

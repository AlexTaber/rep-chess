import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsDashboardRoutingModule } from './stats-dashboard-routing.module';
import { ContainerModule } from '../ui/container/container.module';
import { StatsDashboardComponent } from './stats-dashboard.component';
import { StatsCalendarModule } from '../stats/stats-calendar/stats-calendar.module';
import { GridModule } from '../ui/grid/grid.module';
import { StatusSuccessesPerMinuteModule } from '../stats/stats-successes-per-minute/stats-successes-per-minute.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    StatsDashboardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    StatsDashboardRoutingModule,
    ContainerModule,
    GridModule,
    StatsCalendarModule,
    StatusSuccessesPerMinuteModule,
  ]
})
export class StatsDashboardModule { }

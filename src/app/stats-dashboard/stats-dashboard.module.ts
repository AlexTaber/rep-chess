import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsDashboardRoutingModule } from './stats-dashboard-routing.module';
import { ContainerModule } from '../ui/container/container.module';
import { QuickStatsModule } from './quick-stats/quick-stats.module';
import { StatsDashboardComponent } from './stats-dashboard.component';


@NgModule({
  declarations: [
    StatsDashboardComponent,
  ],
  imports: [
    CommonModule,
    StatsDashboardRoutingModule,
    ContainerModule,
    QuickStatsModule,
  ]
})
export class StatsDashboardModule { }

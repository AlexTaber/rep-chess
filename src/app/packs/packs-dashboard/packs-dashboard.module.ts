import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacksDashboardComponent } from './packs-dashboard.component';
import { ContainerModule } from 'src/app/ui/container/container.module';
import { GridModule } from 'src/app/ui/grid/grid.module';
import { PackCardModule } from '../pack-card/pack-card.module';
import { PacksDashboardRoutingModule } from './packs-dashboard-routing.module';
import { PackModule } from '../pack/pack.module';



@NgModule({
  declarations: [
    PacksDashboardComponent
  ],
  imports: [
    CommonModule,
    PacksDashboardRoutingModule,
    ContainerModule,
    GridModule,
    PackCardModule,
    PackModule,
  ],
  exports: [
    PacksDashboardComponent
  ]
})
export class PacksDashboardModule { }

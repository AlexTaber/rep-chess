import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsResultsComponent } from './stats-results.component';
import { GridModule } from '../../ui/grid/grid.module';
import { MatCardModule } from '@angular/material/card';
import { FormatTimeModule } from '../../shared/format-time/format-time.module';



@NgModule({
  declarations: [
    StatsResultsComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    MatCardModule,
    FormatTimeModule,
  ],
  exports: [
    StatsResultsComponent
  ]
})
export class StatsResultsModule { }

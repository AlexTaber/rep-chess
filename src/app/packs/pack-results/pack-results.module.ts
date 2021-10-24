import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackResultsComponent } from './pack-results.component';
import { StatsAccuracyModule } from '../../stats/stats-accuracy/stats-accuracy.module';
import { GridModule } from 'src/app/ui/grid/grid.module';
import { StatsAveragesModule } from 'src/app/stats/stats-averages/stats-averages.module';
import { StatsCalendarModule } from 'src/app/stats/stats-calendar/stats-calendar.module';
import { MatCardModule } from '@angular/material/card';
import { StatusSuccessesPerMinuteModule } from 'src/app/stats/stats-successes-per-minute/stats-successes-per-minute.module';


@NgModule({
  declarations: [
    PackResultsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    GridModule,
    StatsAccuracyModule,
    StatsAveragesModule,
    StatsCalendarModule,
    StatusSuccessesPerMinuteModule,
  ],
  exports: [
    PackResultsComponent
  ]
})
export class PackResultsModule { }

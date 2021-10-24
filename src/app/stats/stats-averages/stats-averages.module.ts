import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsAveragesComponent } from './stats-averages.component';
import { MatCardModule } from '@angular/material/card';
import { GridModule } from 'src/app/ui/grid/grid.module';
import { FormatTimeModule } from 'src/app/shared/format-time/format-time.module';



@NgModule({
  declarations: [
    StatsAveragesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormatTimeModule,
    GridModule,
  ],
  exports: [
    StatsAveragesComponent
  ]
})
export class StatsAveragesModule { }

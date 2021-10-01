import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickStatsComponent } from './quick-stats.component';
import { MatCardModule } from '@angular/material/card';
import { GridModule } from 'src/app/ui/grid/grid.module';



@NgModule({
  declarations: [
    QuickStatsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    GridModule,
  ],
  exports: [
    QuickStatsComponent
  ]
})
export class QuickStatsModule { }

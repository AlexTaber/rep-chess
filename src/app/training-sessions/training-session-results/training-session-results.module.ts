import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSessionResultsComponent } from './training-session-results.component';
import { GridModule } from 'src/app/ui/grid/grid.module';
import { MatCardModule } from '@angular/material/card';
import { FormatTimeModule } from 'src/app/shared/format-time/format-time.module';



@NgModule({
  declarations: [
    TrainingSessionResultsComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    MatCardModule,
    FormatTimeModule,
  ],
  exports: [
    TrainingSessionResultsComponent
  ]
})
export class TrainingSessionResultsModule { }

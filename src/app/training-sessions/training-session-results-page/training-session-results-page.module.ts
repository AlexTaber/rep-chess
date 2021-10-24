import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSessionResultsPageComponent } from './training-session-results-page.component';
import { TrainingSessionResultsModule } from '../training-session-results/training-session-results.module';
import { ContainerModule } from 'src/app/ui/container/container.module';



@NgModule({
  declarations: [
    TrainingSessionResultsPageComponent
  ],
  imports: [
    CommonModule,
    ContainerModule,
    TrainingSessionResultsModule,
  ],
  exports: [
    TrainingSessionResultsPageComponent
  ]
})
export class TrainingSessionResultsPageModule { }

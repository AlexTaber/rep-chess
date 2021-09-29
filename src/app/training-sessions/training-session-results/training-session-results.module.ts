import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSessionResultsComponent } from './training-session-results.component';
import { ContainerModule } from 'src/app/ui/container/container.module';



@NgModule({
  declarations: [
    TrainingSessionResultsComponent
  ],
  imports: [
    CommonModule,
    ContainerModule,
  ],
  exports: [
    TrainingSessionResultsComponent
  ]
})
export class TrainingSessionResultsModule { }

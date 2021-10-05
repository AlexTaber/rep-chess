import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSessionComponent } from './training-session.component';
import { TrainingSessionClockModule } from '../training-session-clock/training-session-clock.module';
import { ContainerModule } from 'src/app/ui/container/container.module';
import { MatButtonModule } from '@angular/material/button';
import { GridModule } from 'src/app/ui/grid/grid.module';
import { TrainingSessionResultsModule } from '../training-session-results/training-session-results.module';
import { TrainExercisesModule } from 'src/app/exercises/train-exercises/train-exercises.module';



@NgModule({
  declarations: [
    TrainingSessionComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    GridModule,
    ContainerModule,
    TrainExercisesModule,
    TrainingSessionClockModule,
    TrainingSessionResultsModule,
  ],
  exports: [
    TrainingSessionComponent
  ]
})
export class TrainingSessionModule { }

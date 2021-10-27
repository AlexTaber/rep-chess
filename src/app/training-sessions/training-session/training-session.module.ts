import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSessionComponent } from './training-session.component';
import { ContainerModule } from 'src/app/ui/container/container.module';
import { GridModule } from 'src/app/ui/grid/grid.module';
import { TrainingSessionResultsModule } from '../training-session-results/training-session-results.module';
import { TrainExercisesModule } from 'src/app/exercises/train-exercises/train-exercises.module';
import { PackCycleCompleteModule } from '../../pack-cycles/pack-cycle-complete/pack-cycle-complete.module';
import { ModalModule } from '../../ui/modal/modal.module';



@NgModule({
  declarations: [
    TrainingSessionComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    ContainerModule,
    ModalModule,
    TrainExercisesModule,
    TrainingSessionResultsModule,
    PackCycleCompleteModule,
  ],
  exports: [
    TrainingSessionComponent
  ]
})
export class TrainingSessionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacksDashboardComponent } from './packs-dashboard.component';
import { ContainerModule } from 'src/app/ui/container/container.module';
import { GridModule } from 'src/app/ui/grid/grid.module';
import { PackCardModule } from '../pack-card/pack-card.module';
import { PacksDashboardRoutingModule } from './packs-dashboard-routing.module';
import { PackModule } from '../pack/pack.module';
import { ExerciseModule } from 'src/app/exercises/exercise/exercise.module';
import { CreateTrainingSessionModule } from 'src/app/training-sessions/create-training-session/create-training-session.module';
import { TrainingSessionModule } from 'src/app/training-sessions/training-session/training-session.module';
import { TrainingSessionResultsPageModule } from 'src/app/training-sessions/training-session-results-page/training-session-results-page.module';



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
    ExerciseModule,
    CreateTrainingSessionModule,
    TrainingSessionModule,
    TrainingSessionResultsPageModule,
  ],
  exports: [
    PacksDashboardComponent
  ]
})
export class PacksDashboardModule { }

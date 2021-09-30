import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTrainingSessionComponent } from 'src/app/training-sessions/create-training-session/create-training-session.component';
import { ExerciseComponent } from 'src/app/exercises/exercise/exercise.component';
import { PackComponent } from '../pack/pack.component';
import { PacksDashboardComponent } from './packs-dashboard.component';
import { TrainingSessionComponent } from 'src/app/training-sessions/training-session/training-session.component';
import { TrainingSessionResultsPageComponent } from 'src/app/training-sessions/training-session-results-page/training-session-results-page.component';

const routes: Routes = [
  {
    path: "",
    component: PacksDashboardComponent,
  },

  {
    path: ":packId",
    component: PackComponent,
    children: [
      {
        path: "exercises/:exerciseId",
        component: ExerciseComponent,
      },

      {
        path: "sessions/new",
        component: CreateTrainingSessionComponent,
      },

      {
        path: "train",
        component: TrainingSessionComponent,
      }
    ]
  },

  {
    path: ":sessionId/results",
    component: TrainingSessionResultsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacksDashboardRoutingModule { }

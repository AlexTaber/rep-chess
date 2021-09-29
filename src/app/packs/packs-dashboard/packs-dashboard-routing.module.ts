import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTrainingSessionComponent } from 'src/app/training-sessions/create-training-session/create-training-session.component';
import { ExerciseComponent } from 'src/app/exercises/exercise/exercise.component';
import { PackComponent } from '../pack/pack.component';
import { PacksDashboardComponent } from './packs-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: PacksDashboardComponent,
  },

  {
    path: ":packId",
    component: PackComponent,
  },

  {
    path: ":packId/exercises/:exerciseId",
    component: ExerciseComponent,
  },

  {
    path: ":packId/sessions/new",
    component: CreateTrainingSessionComponent,
  },

  {
    path: ":packId/train",
    component: CreateTrainingSessionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacksDashboardRoutingModule { }

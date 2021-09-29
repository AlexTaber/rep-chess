import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSessionComponent } from 'src/app/sessions/create-session/create-session.component';
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
    component: CreateSessionComponent,
  },

  {
    path: ":packId/train",
    component: CreateSessionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacksDashboardRoutingModule { }

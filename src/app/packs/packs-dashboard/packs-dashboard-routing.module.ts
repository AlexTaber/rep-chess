import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackComponent } from '../pack/pack.component';
import { PacksDashboardComponent } from './packs-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: PacksDashboardComponent,
  },

  {
    path: ":id",
    component: PackComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacksDashboardRoutingModule { }

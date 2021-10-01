import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "packs",
  },

  {
    path: "packs",
    loadChildren: () => import('./packs/packs-dashboard/packs-dashboard.module').then(m => m.PacksDashboardModule)
  },

  {
    path: "stats",
    loadChildren: () => import('./stats-dashboard/stats-dashboard.module').then(m => m.StatsDashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

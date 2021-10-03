import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackResultsPageComponent } from './pack-results-page.component';
import { PackResultsModule } from '../pack-results/pack-results.module';
import { ContainerModule } from 'src/app/ui/container/container.module';



@NgModule({
  declarations: [
    PackResultsPageComponent
  ],
  imports: [
    CommonModule,
    ContainerModule,
    PackResultsModule,
  ],
  exports: [
    PackResultsPageComponent
  ]
})
export class PackResultsPageModule { }

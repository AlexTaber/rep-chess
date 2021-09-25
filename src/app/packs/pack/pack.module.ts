import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackComponent } from './pack.component';
import { ContainerModule } from 'src/app/ui/container/container.module';
import { ExerciseCardModule } from 'src/app/exercises/exercise-card/exercise-card.module';
import { GridModule } from 'src/app/ui/grid/grid.module';



@NgModule({
  declarations: [
    PackComponent
  ],
  imports: [
    CommonModule,
    ContainerModule,
    ExerciseCardModule,
    GridModule,
  ],
  exports: [
    PackComponent
  ]
})
export class PackModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTrainingSessionComponent } from './create-training-session.component';
import { TrainingSessionFormModule } from '../training-session-form/training-session-form.module';
import { ContainerModule } from 'src/app/ui/container/container.module';



@NgModule({
  declarations: [
    CreateTrainingSessionComponent
  ],
  imports: [
    CommonModule,
    ContainerModule,
    TrainingSessionFormModule,
  ],
  exports: [
    CreateTrainingSessionComponent
  ]
})
export class CreateTrainingSessionModule { }

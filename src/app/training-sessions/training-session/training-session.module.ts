import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSessionComponent } from './training-session.component';
import { TrainingSessionExerciseModule } from 'src/app/training-session-exercises/training-session-exercise/training-session-exercise.module';
import { TrainingSessionClockModule } from '../training-session-clock/training-session-clock.module';
import { ContainerModule } from 'src/app/ui/container/container.module';



@NgModule({
  declarations: [
    TrainingSessionComponent
  ],
  imports: [
    CommonModule,
    ContainerModule,
    TrainingSessionExerciseModule,
    TrainingSessionClockModule,
  ],
  exports: [
    TrainingSessionComponent
  ]
})
export class TrainingSessionModule { }

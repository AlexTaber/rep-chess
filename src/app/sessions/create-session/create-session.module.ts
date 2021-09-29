import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSessionComponent } from './create-session.component';
import { SessionFormModule } from '../session-form/session-form.module';
import { ContainerModule } from 'src/app/ui/container/container.module';



@NgModule({
  declarations: [
    CreateSessionComponent
  ],
  imports: [
    CommonModule,
    ContainerModule,
    SessionFormModule,
  ],
  exports: [
    CreateSessionComponent
  ]
})
export class CreateSessionModule { }

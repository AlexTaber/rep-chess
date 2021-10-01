import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePackComponent } from './create-pack.component';
import { PacksFormModule } from '../packs-form/packs-form.module';
import { ContainerModule } from 'src/app/ui/container/container.module';



@NgModule({
  declarations: [
    CreatePackComponent
  ],
  imports: [
    CommonModule,
    ContainerModule,
    PacksFormModule,
  ],
  exports: [
    CreatePackComponent
  ]
})
export class CreatePackModule { }

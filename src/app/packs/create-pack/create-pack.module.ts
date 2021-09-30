import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePackComponent } from './create-pack.component';
import { PacksFormModule } from '../packs-form/packs-form.module';



@NgModule({
  declarations: [
    CreatePackComponent
  ],
  imports: [
    CommonModule,
    PacksFormModule,
  ],
  exports: [
    CreatePackComponent
  ]
})
export class CreatePackModule { }

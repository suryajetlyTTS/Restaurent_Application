import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedpageRoutingModule } from './sharedpage-routing.module';
import { SharedComponent } from './shared/shared.component';


@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule,
    SharedpageRoutingModule
  ]
})
export class SharedpageModule { }

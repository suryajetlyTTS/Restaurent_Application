import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenumoduleRoutingModule } from './menumodule-routing.module';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenumoduleRoutingModule
  ]
})
export class MenumoduleModule { }

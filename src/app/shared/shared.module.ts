import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuMainComponent } from './menu-main/menu-main.component';
import { BtnEliminarComponent } from './btn-eliminar/btn-eliminar.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [MenuMainComponent, BtnEliminarComponent],
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [
    MenuMainComponent, BtnEliminarComponent
  ]
})
export class SharedModule { }

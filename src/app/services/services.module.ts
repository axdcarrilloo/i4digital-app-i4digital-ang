import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TypeAppointmentServiceService } from './type-appointment-service.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [
    TypeAppointmentServiceService
  ]
})
export class ServicesModule { }

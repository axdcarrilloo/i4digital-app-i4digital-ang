import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ViewTypeAppointmentComponent } from './view-type-appointment/view-type-appointment.component';
import { ServicesModule } from '../services/services.module';
import { RegisterTypeAppointmentComponent } from './register-type-appointment/register-type-appointment.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ViewTypeAppointmentComponent, RegisterTypeAppointmentComponent
  ],
  imports: [
    CommonModule, ServicesModule, FormsModule, ReactiveFormsModule, SharedModule
  ]
})
export class MainComponentsModule { }

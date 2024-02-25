import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTypeAppointmentComponent } from './main-components/view-type-appointment/view-type-appointment.component';
import { RegisterTypeAppointmentComponent } from './main-components/register-type-appointment/register-type-appointment.component';

const routes: Routes = [
  { path: 'view-type-appointment', component: ViewTypeAppointmentComponent },
  { path: 'register-type-appointment', component: RegisterTypeAppointmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { TypeAppointment } from 'src/app/dtos/type-appointment';
import { TypeAppointmentServiceService } from 'src/app/services/type-appointment-service.service';

@Component({
  selector: 'app-view-type-appointment',
  templateUrl: './view-type-appointment.component.html',
  styleUrls: ['./view-type-appointment.component.scss']
})
export class ViewTypeAppointmentComponent implements OnInit {

  typeAppointments!: TypeAppointment[];

  constructor(private typeAppointmentScv:TypeAppointmentServiceService) {}

  ngOnInit(): void {
    this.getAll();
  }

  loadTypesAppointments(event: any): void {
    this.getAll();
  }

  getAll(): void {
    this.typeAppointmentScv.getAll().subscribe((data: TypeAppointment[]) => {
      //console.log(data);
      this.typeAppointments = data;
    });
  }
}

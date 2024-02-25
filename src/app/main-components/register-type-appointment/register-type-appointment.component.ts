import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TypeAppointmentServiceService } from 'src/app/services/type-appointment-service.service';

@Component({
  selector: 'app-register-type-appointment',
  templateUrl: './register-type-appointment.component.html',
  styleUrls: ['./register-type-appointment.component.scss']
})
export class RegisterTypeAppointmentComponent implements OnInit {

  typeAppointmentForm!: FormGroup;

  constructor(private typeAppointmentSvc: TypeAppointmentServiceService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.typeAppointmentForm = this.loadForm();
  }

  loadForm(): FormGroup {
    return this.fb.group({
      name: ['',  [Validators.required]],
      description: ['',  [Validators.required]],
      durationMinutes: ['',  [Validators.required]],
      colorHexCode: ['',  [Validators.required]]
    });
  }

  register(): void {
    let typeAppointmentRegistrar = this.typeAppointmentForm.value;
    this.typeAppointmentSvc.register(typeAppointmentRegistrar).subscribe((data: string) => {},
    (data: HttpErrorResponse) => {
      console.log('Se registro el siguiente Id '+data.error.text)
    });
    this.typeAppointmentForm.reset();
  }

}

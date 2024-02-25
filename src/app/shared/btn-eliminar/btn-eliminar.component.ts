import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypeAppointment } from 'src/app/dtos/type-appointment';
import { TypeAppointmentServiceService } from 'src/app/services/type-appointment-service.service';

@Component({
  selector: 'btn-eliminar',
  templateUrl: './btn-eliminar.component.html',
  styleUrls: ['./btn-eliminar.component.scss']
})
export class BtnEliminarComponent {

  @Input()idMain!: string;
  @Output() typeAppointmentEmmit = new EventEmitter<string>();

  constructor(private typeAppointmentSvc: TypeAppointmentServiceService) {}

  deleteById(): void {
    this.typeAppointmentSvc.deleteById(this.idMain).subscribe((data: string) => {},
    (data: HttpErrorResponse) => {
      this.typeAppointmentEmmit.emit("LoadTypesAppointments");
      console.log('Se elimino el siguiente Id '+data.error.text);
    });
  }

}

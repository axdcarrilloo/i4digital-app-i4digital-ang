import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeAppointment } from '../dtos/type-appointment';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeAppointmentServiceService {

  constructor(private http: HttpClient) { }

  deleteById(id: string): Observable<string> {
    return this.http.delete<string>(environment.URL_BACK+'deleteById/'+id);
  }

  register(typeAppointment: TypeAppointment): Observable<string> {
    const header = new HttpHeaders();
    // header.append('Content-Type', 'multipart/form-data');
    header.append('Content-Type', 'application/json');
    header.append('Accept', 'application/json');
    const options = ({ headers: header });
    return this.http.post<string>(environment.URL_BACK+'register', typeAppointment, options);
  }

  getAll(): Observable<TypeAppointment[]> {
    return this.http.get<TypeAppointment[]>(environment.URL_BACK+'getAll');
  }
}

import { TestBed } from '@angular/core/testing';

import { TypeAppointmentServiceService } from './type-appointment-service.service';

describe('TypeAppointmentServiceService', () => {
  let service: TypeAppointmentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeAppointmentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

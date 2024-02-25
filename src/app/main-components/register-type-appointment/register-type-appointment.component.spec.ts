import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTypeAppointmentComponent } from './register-type-appointment.component';

describe('RegisterTypeAppointmentComponent', () => {
  let component: RegisterTypeAppointmentComponent;
  let fixture: ComponentFixture<RegisterTypeAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterTypeAppointmentComponent]
    });
    fixture = TestBed.createComponent(RegisterTypeAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

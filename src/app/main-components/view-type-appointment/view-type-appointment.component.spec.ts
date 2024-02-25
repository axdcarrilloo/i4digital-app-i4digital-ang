import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTypeAppointmentComponent } from './view-type-appointment.component';

describe('ViewTypeAppointmentComponent', () => {
  let component: ViewTypeAppointmentComponent;
  let fixture: ComponentFixture<ViewTypeAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTypeAppointmentComponent]
    });
    fixture = TestBed.createComponent(ViewTypeAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

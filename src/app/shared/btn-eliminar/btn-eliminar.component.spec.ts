import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEliminarComponent } from './btn-eliminar.component';

describe('BtnEliminarComponent', () => {
  let component: BtnEliminarComponent;
  let fixture: ComponentFixture<BtnEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnEliminarComponent]
    });
    fixture = TestBed.createComponent(BtnEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

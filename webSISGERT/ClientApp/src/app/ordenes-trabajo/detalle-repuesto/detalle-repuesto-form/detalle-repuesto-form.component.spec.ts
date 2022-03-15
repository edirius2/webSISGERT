import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRepuestoFormComponent } from './detalle-repuesto-form.component';

describe('DetalleRepuestoFormComponent', () => {
  let component: DetalleRepuestoFormComponent;
  let fixture: ComponentFixture<DetalleRepuestoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleRepuestoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRepuestoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

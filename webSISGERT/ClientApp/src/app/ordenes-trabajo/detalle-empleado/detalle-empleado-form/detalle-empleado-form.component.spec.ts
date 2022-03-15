import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEmpleadoFormComponent } from './detalle-empleado-form.component';

describe('DetalleEmpleadoFormComponent', () => {
  let component: DetalleEmpleadoFormComponent;
  let fixture: ComponentFixture<DetalleEmpleadoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleEmpleadoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEmpleadoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCostoTareaCotizacionComponent } from './detalle-costo-tarea-cotizacion.component';

describe('DetalleCostoTareaCotizacionComponent', () => {
  let component: DetalleCostoTareaCotizacionComponent;
  let fixture: ComponentFixture<DetalleCostoTareaCotizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCostoTareaCotizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCostoTareaCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

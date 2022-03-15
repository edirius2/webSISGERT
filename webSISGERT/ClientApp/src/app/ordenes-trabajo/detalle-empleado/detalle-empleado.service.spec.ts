import { TestBed, inject } from '@angular/core/testing';

import { DetalleEmpleadoService } from './detalle-empleado.service';

describe('DetalleEmpleadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleEmpleadoService]
    });
  });

  it('should be created', inject([DetalleEmpleadoService], (service: DetalleEmpleadoService) => {
    expect(service).toBeTruthy();
  }));
});

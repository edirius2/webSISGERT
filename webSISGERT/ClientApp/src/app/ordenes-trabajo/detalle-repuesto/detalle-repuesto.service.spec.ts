import { TestBed, inject } from '@angular/core/testing';

import { DetalleRepuestoService } from './detalle-repuesto.service';

describe('DetalleRepuestoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleRepuestoService]
    });
  });

  it('should be created', inject([DetalleRepuestoService], (service: DetalleRepuestoService) => {
    expect(service).toBeTruthy();
  }));
});

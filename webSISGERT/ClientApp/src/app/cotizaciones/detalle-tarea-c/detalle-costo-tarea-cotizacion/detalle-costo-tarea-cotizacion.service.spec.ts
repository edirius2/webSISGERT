import { TestBed, inject } from '@angular/core/testing';

import { DetalleCostoTareaCotizacionService } from './detalle-costo-tarea-cotizacion.service';

describe('DetalleCostoTareaCotizacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleCostoTareaCotizacionService]
    });
  });

  it('should be created', inject([DetalleCostoTareaCotizacionService], (service: DetalleCostoTareaCotizacionService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { DetallePagoService } from './detalle-pago.service';

describe('DetallePagoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetallePagoService]
    });
  });

  it('should be created', inject([DetallePagoService], (service: DetallePagoService) => {
    expect(service).toBeTruthy();
  }));
});

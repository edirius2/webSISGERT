import { TestBed, inject } from '@angular/core/testing';

import { DetalleCostoService } from './detalle-costo.service';

describe('DetalleCostoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleCostoService]
    });
  });

  it('should be created', inject([DetalleCostoService], (service: DetalleCostoService) => {
    expect(service).toBeTruthy();
  }));
});

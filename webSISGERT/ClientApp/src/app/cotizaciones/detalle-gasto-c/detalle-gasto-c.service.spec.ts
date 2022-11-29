import { TestBed, inject } from '@angular/core/testing';

import { DetalleGastoCService } from './detalle-gasto-c.service';

describe('DetalleGastoCService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleGastoCService]
    });
  });

  it('should be created', inject([DetalleGastoCService], (service: DetalleGastoCService) => {
    expect(service).toBeTruthy();
  }));
});

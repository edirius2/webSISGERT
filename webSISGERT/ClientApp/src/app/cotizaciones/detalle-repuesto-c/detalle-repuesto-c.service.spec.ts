import { TestBed, inject } from '@angular/core/testing';

import { DetalleRepuestoCService } from './detalle-repuesto-c.service';

describe('DetalleRepuestoCService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleRepuestoCService]
    });
  });

  it('should be created', inject([DetalleRepuestoCService], (service: DetalleRepuestoCService) => {
    expect(service).toBeTruthy();
  }));
});

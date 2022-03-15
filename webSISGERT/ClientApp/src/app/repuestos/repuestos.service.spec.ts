import { TestBed, inject } from '@angular/core/testing';

import { RepuestosService } from './repuestos.service';

describe('RepuestosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepuestosService]
    });
  });

  it('should be created', inject([RepuestosService], (service: RepuestosService) => {
    expect(service).toBeTruthy();
  }));
});

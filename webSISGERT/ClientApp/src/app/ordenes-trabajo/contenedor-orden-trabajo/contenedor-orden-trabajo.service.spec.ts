import { TestBed, inject } from '@angular/core/testing';

import {contenedorOrdenTrabajoService } from './contenedor-orden-trabajo.service';

describe('OrdenesTrabajo\contenedorOrdenTrabajo\contenedorOrdenTrabajoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [contenedorOrdenTrabajoService]
    });
  });

  it('should be created', inject([contenedorOrdenTrabajoService], (service: contenedorOrdenTrabajoService) => {
    expect(service).toBeTruthy();
  }));
});

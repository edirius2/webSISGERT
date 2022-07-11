import { TestBed, inject } from '@angular/core/testing';

import { EstadoMaquinariasService } from './estado-maquinarias.service';

describe('EstadoMaquinariasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstadoMaquinariasService]
    });
  });

  it('should be created', inject([EstadoMaquinariasService], (service: EstadoMaquinariasService) => {
    expect(service).toBeTruthy();
  }));
});

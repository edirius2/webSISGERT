import { TestBed, inject } from '@angular/core/testing';

import { TipoMaquinariaService } from './tipo-maquinaria.service';

describe('TipoMaquinariaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoMaquinariaService]
    });
  });

  it('should be created', inject([TipoMaquinariaService], (service: TipoMaquinariaService) => {
    expect(service).toBeTruthy();
  }));
});

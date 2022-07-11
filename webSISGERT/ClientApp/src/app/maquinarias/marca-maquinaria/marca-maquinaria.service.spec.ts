import { TestBed, inject } from '@angular/core/testing';

import { MarcaMaquinariaService } from './marca-maquinaria.service';

describe('MarcaMaquinariaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarcaMaquinariaService]
    });
  });

  it('should be created', inject([MarcaMaquinariaService], (service: MarcaMaquinariaService) => {
    expect(service).toBeTruthy();
  }));
});

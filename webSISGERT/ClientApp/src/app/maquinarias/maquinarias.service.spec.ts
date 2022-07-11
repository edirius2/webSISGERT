import { TestBed, inject } from '@angular/core/testing';

import { MaquinariasService } from './maquinarias.service';

describe('MaquinariasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaquinariasService]
    });
  });

  it('should be created', inject([MaquinariasService], (service: MaquinariasService) => {
    expect(service).toBeTruthy();
  }));
});

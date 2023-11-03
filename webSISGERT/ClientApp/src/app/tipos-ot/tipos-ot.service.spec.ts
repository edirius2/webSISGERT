import { TestBed, inject } from '@angular/core/testing';

import { TiposOTService } from './tipos-ot.service';

describe('TiposOTService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiposOTService]
    });
  });

  it('should be created', inject([TiposOTService], (service: TiposOTService) => {
    expect(service).toBeTruthy();
  }));
});

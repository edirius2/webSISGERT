import { TestBed, inject } from '@angular/core/testing';

import { DetalleTareaCService } from './detalle-tarea-c.service';

describe('DetalleTareaCService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleTareaCService]
    });
  });

  it('should be created', inject([DetalleTareaCService], (service: DetalleTareaCService) => {
    expect(service).toBeTruthy();
  }));
});

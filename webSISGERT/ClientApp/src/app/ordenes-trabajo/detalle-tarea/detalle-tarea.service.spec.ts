import { TestBed, inject } from '@angular/core/testing';

import { DetalleTareaService } from './detalle-tarea.service';

describe('DetalleTareaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleTareaService]
    });
  });

  it('should be created', inject([DetalleTareaService], (service: DetalleTareaService) => {
    expect(service).toBeTruthy();
  }));
});

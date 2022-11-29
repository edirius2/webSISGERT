import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCostoTareaComponent } from './detalle-costo-tarea.component';

describe('DetalleCostoTareaComponent', () => {
  let component: DetalleCostoTareaComponent;
  let fixture: ComponentFixture<DetalleCostoTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCostoTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCostoTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

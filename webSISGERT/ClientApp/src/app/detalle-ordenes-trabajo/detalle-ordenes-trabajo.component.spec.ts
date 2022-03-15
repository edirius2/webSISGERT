import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOrdenesTrabajoComponent } from './detalle-ordenes-trabajo.component';

describe('DetalleOrdenesTrabajoComponent', () => {
  let component: DetalleOrdenesTrabajoComponent;
  let fixture: ComponentFixture<DetalleOrdenesTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleOrdenesTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleOrdenesTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

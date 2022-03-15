import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorOrdenTrabajoComponent } from './contenedor-orden-trabajo.component';

describe('ContenedorOrdenTrabajoComponent', () => {
  let component: ContenedorOrdenTrabajoComponent;
  let fixture: ComponentFixture<ContenedorOrdenTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorOrdenTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorOrdenTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

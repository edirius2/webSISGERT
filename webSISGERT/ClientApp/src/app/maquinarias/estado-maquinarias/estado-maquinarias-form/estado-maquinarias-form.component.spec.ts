import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoMaquinariasFormComponent } from './estado-maquinarias-form.component';

describe('EstadoMaquinariasFormComponent', () => {
  let component: EstadoMaquinariasFormComponent;
  let fixture: ComponentFixture<EstadoMaquinariasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoMaquinariasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoMaquinariasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoMaquinariasComponent } from './estado-maquinarias.component';

describe('EstadoMaquinariasComponent', () => {
  let component: EstadoMaquinariasComponent;
  let fixture: ComponentFixture<EstadoMaquinariasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoMaquinariasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoMaquinariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

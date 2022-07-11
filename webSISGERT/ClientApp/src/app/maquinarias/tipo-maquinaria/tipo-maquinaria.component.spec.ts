import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMaquinariaComponent } from './tipo-maquinaria.component';

describe('TipoMaquinariaComponent', () => {
  let component: TipoMaquinariaComponent;
  let fixture: ComponentFixture<TipoMaquinariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoMaquinariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoMaquinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

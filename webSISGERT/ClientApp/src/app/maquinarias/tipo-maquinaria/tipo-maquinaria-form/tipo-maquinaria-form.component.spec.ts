import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMaquinariaFormComponent } from './tipo-maquinaria-form.component';

describe('TipoMaquinariaFormComponent', () => {
  let component: TipoMaquinariaFormComponent;
  let fixture: ComponentFixture<TipoMaquinariaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoMaquinariaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoMaquinariaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

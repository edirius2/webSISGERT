import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleGastoCFormComponent } from './detalle-gasto-cform.component';

describe('DetalleGastoCFormComponent', () => {
  let component: DetalleGastoCFormComponent;
  let fixture: ComponentFixture<DetalleGastoCFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleGastoCFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleGastoCFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

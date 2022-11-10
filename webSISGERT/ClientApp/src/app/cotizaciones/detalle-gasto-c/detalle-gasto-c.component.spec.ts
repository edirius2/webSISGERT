import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleGastoCComponent } from './detalle-gasto-c.component';

describe('DetalleGastoCComponent', () => {
  let component: DetalleGastoCComponent;
  let fixture: ComponentFixture<DetalleGastoCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleGastoCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleGastoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

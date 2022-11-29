import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRepuestoCComponent } from './detalle-repuesto-c.component';

describe('DetalleRepuestoCComponent', () => {
  let component: DetalleRepuestoCComponent;
  let fixture: ComponentFixture<DetalleRepuestoCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleRepuestoCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRepuestoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

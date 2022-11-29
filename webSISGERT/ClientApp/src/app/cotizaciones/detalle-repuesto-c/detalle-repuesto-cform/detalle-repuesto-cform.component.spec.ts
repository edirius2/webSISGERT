import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRepuestoCformComponent } from './detalle-repuesto-cform.component';

describe('DetalleRepuestoCformComponent', () => {
  let component: DetalleRepuestoCformComponent;
  let fixture: ComponentFixture<DetalleRepuestoCformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleRepuestoCformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRepuestoCformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

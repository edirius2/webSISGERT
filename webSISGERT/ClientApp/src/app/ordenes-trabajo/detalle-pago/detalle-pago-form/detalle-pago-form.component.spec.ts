import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePagoFormComponent } from './detalle-pago-form.component';

describe('DetallePagoFormComponent', () => {
  let component: DetallePagoFormComponent;
  let fixture: ComponentFixture<DetallePagoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePagoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePagoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

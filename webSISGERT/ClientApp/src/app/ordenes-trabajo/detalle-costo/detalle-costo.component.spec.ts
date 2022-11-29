import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCostoComponent } from './detalle-costo.component';

describe('DetalleCostoComponent', () => {
  let component: DetalleCostoComponent;
  let fixture: ComponentFixture<DetalleCostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

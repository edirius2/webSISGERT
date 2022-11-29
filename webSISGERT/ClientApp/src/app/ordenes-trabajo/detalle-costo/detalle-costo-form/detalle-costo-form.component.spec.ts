import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCostoFormComponent } from './detalle-costo-form.component';

describe('DetalleCostoFormComponent', () => {
  let component: DetalleCostoFormComponent;
  let fixture: ComponentFixture<DetalleCostoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCostoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCostoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

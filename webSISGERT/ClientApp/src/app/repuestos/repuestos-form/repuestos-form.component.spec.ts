import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepuestosFormComponent } from './repuestos-form.component';

describe('RepuestosFormComponent', () => {
  let component: RepuestosFormComponent;
  let fixture: ComponentFixture<RepuestosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepuestosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepuestosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

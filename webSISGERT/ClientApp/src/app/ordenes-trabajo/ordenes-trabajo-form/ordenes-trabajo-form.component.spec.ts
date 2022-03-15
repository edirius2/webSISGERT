import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesTrabajoFormComponent } from './ordenes-trabajo-form.component';

describe('OrdenesTrabajoFormComponent', () => {
  let component: OrdenesTrabajoFormComponent;
  let fixture: ComponentFixture<OrdenesTrabajoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenesTrabajoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenesTrabajoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

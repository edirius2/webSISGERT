import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesFormComponent } from './especialidades-form.component';

describe('EspecialidadesFormComponent', () => {
  let component: EspecialidadesFormComponent;
  let fixture: ComponentFixture<EspecialidadesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecialidadesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

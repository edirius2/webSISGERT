import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaMaquinariaFormComponent } from './marca-maquinaria-form.component';

describe('MarcaMaquinariaFormComponent', () => {
  let component: MarcaMaquinariaFormComponent;
  let fixture: ComponentFixture<MarcaMaquinariaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaMaquinariaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaMaquinariaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

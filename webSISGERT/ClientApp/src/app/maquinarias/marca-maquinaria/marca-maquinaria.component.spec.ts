import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaMaquinariaComponent } from './marca-maquinaria.component';

describe('MarcaMaquinariaComponent', () => {
  let component: MarcaMaquinariaComponent;
  let fixture: ComponentFixture<MarcaMaquinariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaMaquinariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaMaquinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

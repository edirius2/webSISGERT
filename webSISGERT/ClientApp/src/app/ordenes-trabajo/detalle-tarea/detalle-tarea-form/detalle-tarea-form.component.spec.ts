import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTareaFormComponent } from './detalle-tarea-form.component';

describe('DetalleTareaFormComponent', () => {
  let component: DetalleTareaFormComponent;
  let fixture: ComponentFixture<DetalleTareaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleTareaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTareaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

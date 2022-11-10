import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTareaCFormComponent } from './detalle-tarea-cform.component';

describe('DetalleTareaCFormComponent', () => {
  let component: DetalleTareaCFormComponent;
  let fixture: ComponentFixture<DetalleTareaCFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleTareaCFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTareaCFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

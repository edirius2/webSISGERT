import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTareaCComponent } from './detalle-tarea-c.component';

describe('DetalleTareaCComponent', () => {
  let component: DetalleTareaCComponent;
  let fixture: ComponentFixture<DetalleTareaCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleTareaCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTareaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

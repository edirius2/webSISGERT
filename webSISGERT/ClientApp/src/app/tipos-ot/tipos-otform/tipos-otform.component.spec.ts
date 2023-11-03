import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposOTFormComponent } from './tipos-otform.component';

describe('TiposOTFormComponent', () => {
  let component: TiposOTFormComponent;
  let fixture: ComponentFixture<TiposOTFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposOTFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposOTFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposOTComponent } from './tipos-ot.component';

describe('TiposOTComponent', () => {
  let component: TiposOTComponent;
  let fixture: ComponentFixture<TiposOTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposOTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposOTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOrdenesComponent } from './menu-ordenes.component';

describe('MenuOrdenesComponent', () => {
  let component: MenuOrdenesComponent;
  let fixture: ComponentFixture<MenuOrdenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuOrdenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

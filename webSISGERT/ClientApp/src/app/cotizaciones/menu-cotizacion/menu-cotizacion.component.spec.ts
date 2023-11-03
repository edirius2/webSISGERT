import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCotizacionComponent } from './menu-cotizacion.component';

describe('MenuCotizacionComponent', () => {
  let component: MenuCotizacionComponent;
  let fixture: ComponentFixture<MenuCotizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCotizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

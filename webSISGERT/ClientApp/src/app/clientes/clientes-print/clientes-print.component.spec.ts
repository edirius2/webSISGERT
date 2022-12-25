import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesPrintComponent } from './clientes-print.component';

describe('ClientesPrintComponent', () => {
  let component: ClientesPrintComponent;
  let fixture: ComponentFixture<ClientesPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientscarsComponent } from './clientscars.component';

describe('ClientscarsComponent', () => {
  let component: ClientscarsComponent;
  let fixture: ComponentFixture<ClientscarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientscarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientscarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

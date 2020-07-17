import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentComponentComponent } from './accident-component.component';

describe('AccidentComponentComponent', () => {
  let component: AccidentComponentComponent;
  let fixture: ComponentFixture<AccidentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccidentComponent } from './new-accident.component';

describe('NewAccidentComponent', () => {
  let component: NewAccidentComponent;
  let fixture: ComponentFixture<NewAccidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAccidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

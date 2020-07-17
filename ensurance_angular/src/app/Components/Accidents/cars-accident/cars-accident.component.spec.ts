import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsAccidentComponent } from './cars-accident.component';

describe('CarsAccidentComponent', () => {
  let component: CarsAccidentComponent;
  let fixture: ComponentFixture<CarsAccidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsAccidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

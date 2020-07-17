import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsComponentComponent } from './cars-component.component';

describe('CarsComponentComponent', () => {
  let component: CarsComponentComponent;
  let fixture: ComponentFixture<CarsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

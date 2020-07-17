import { TestBed } from '@angular/core/testing';

import { AccidentServiceService } from './accident-service.service';

describe('AccidentServiceService', () => {
  let service: AccidentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccidentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

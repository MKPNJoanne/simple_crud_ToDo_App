import { TestBed } from '@angular/core/testing';

import { MotivationalService } from './motivational.service';

describe('MotivationalService', () => {
  let service: MotivationalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotivationalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

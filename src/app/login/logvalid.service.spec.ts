import { TestBed } from '@angular/core/testing';

import { LogvalidService } from './logvalid.service';

describe('LogvalidService', () => {
  let service: LogvalidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogvalidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AcnhService } from './acnh.service';

describe('AcnhService', () => {
  let service: AcnhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcnhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

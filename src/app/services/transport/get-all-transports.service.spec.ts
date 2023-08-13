import { TestBed } from '@angular/core/testing';

import { GetAllTransportsService } from './get-all-transports.service';

describe('GetAllTransportsService', () => {
  let service: GetAllTransportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllTransportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

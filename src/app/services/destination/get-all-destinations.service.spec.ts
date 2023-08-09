import { TestBed } from '@angular/core/testing';

import { GetAllDestinationsService } from './get-all-destinations.service';

describe('GetAllDestinationsService', () => {
  let service: GetAllDestinationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllDestinationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

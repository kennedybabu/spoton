import { TestBed } from '@angular/core/testing';

import { CreateDestinationService } from './create-destination.service';

describe('CreateDestinationService', () => {
  let service: CreateDestinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateDestinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

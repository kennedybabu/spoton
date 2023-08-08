import { TestBed } from '@angular/core/testing';

import { CreateDestinationPackageService } from './create-destination-package.service';

describe('CreateDestinationPackageService', () => {
  let service: CreateDestinationPackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateDestinationPackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

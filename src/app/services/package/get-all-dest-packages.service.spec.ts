import { TestBed } from '@angular/core/testing';

import { GetAllDestPackagesService } from './get-all-dest-packages.service';

describe('GetAllDestPackagesService', () => {
  let service: GetAllDestPackagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllDestPackagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

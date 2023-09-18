import { TestBed } from '@angular/core/testing';

import { GetDestPackagesService } from './get-dest-packages.service';

describe('GetDestPackagesService', () => {
  let service: GetDestPackagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDestPackagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

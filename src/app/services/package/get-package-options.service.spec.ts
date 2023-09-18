import { TestBed } from '@angular/core/testing';

import { GetPackageOptionsService } from './get-package-options.service';

describe('GetPackageOptionsService', () => {
  let service: GetPackageOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPackageOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

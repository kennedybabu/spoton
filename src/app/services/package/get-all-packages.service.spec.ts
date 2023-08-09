import { TestBed } from '@angular/core/testing';

import { GetAllPackagesService } from './get-all-packages.service';

describe('GetAllPackagesService', () => {
  let service: GetAllPackagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllPackagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

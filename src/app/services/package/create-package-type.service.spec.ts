import { TestBed } from '@angular/core/testing';

import { CreatePackageTypeService } from './create-package-type.service';

describe('CreatePackageTypeService', () => {
  let service: CreatePackageTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatePackageTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

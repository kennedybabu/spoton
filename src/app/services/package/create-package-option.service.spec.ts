import { TestBed } from '@angular/core/testing';

import { CreatePackageOptionService } from './create-package-option.service';

describe('CreatePackageOptionService', () => {
  let service: CreatePackageOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatePackageOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

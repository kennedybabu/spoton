import { TestBed } from '@angular/core/testing';

import { GetDestDeatailsService } from './get-dest-deatails.service';

describe('GetDestDeatailsService', () => {
  let service: GetDestDeatailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDestDeatailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

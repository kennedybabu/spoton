import { TestBed } from '@angular/core/testing';

import { GetHotelDetailsService } from './get-hotel-details.service';

describe('GetHotelDetailsService', () => {
  let service: GetHotelDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHotelDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

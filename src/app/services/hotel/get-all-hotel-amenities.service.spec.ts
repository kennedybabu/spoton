import { TestBed } from '@angular/core/testing';

import { GetAllHotelAmenitiesService } from './get-all-hotel-amenities.service';

describe('GetAllHotelAmenitiesService', () => {
  let service: GetAllHotelAmenitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllHotelAmenitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

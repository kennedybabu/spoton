import { TestBed } from '@angular/core/testing';

import { AddHotelAmenityService } from './add-hotel-amenity.service';

describe('AddHotelAmenityService', () => {
  let service: AddHotelAmenityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddHotelAmenityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

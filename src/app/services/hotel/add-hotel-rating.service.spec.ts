import { TestBed } from '@angular/core/testing';

import { AddHotelRatingService } from './add-hotel-rating.service';

describe('AddHotelRatingService', () => {
  let service: AddHotelRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddHotelRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

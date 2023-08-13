import { TestBed } from '@angular/core/testing';

import { UploadHotelImageService } from './upload-hotel-image.service';

describe('UploadHotelImageService', () => {
  let service: UploadHotelImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadHotelImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

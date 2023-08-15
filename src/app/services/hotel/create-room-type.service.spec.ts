import { TestBed } from '@angular/core/testing';

import { CreateRoomTypeService } from './create-room-type.service';

describe('CreateRoomTypeService', () => {
  let service: CreateRoomTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateRoomTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

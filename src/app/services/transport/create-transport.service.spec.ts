import { TestBed } from '@angular/core/testing';

import { CreateTransportService } from './create-transport.service';

describe('CreateTransportService', () => {
  let service: CreateTransportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateTransportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

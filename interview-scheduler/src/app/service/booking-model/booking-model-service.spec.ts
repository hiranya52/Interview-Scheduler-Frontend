import { TestBed } from '@angular/core/testing';

import { BookingModelService } from './booking-model-service';

describe('BookingModelService', () => {
  let service: BookingModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

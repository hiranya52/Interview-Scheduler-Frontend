import { TestBed } from '@angular/core/testing';

import { SlotsModel } from './slots-model';

describe('SlotsModel', () => {
  let service: SlotsModel;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlotsModel);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

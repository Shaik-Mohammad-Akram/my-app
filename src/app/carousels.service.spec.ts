import { TestBed } from '@angular/core/testing';

import { CarouselsService } from './carousels.service';

describe('CarouselsService', () => {
  let service: CarouselsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

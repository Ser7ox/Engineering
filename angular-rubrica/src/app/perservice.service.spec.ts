import { TestBed } from '@angular/core/testing';

import { PerserviceService } from './perservice.service';

describe('PerserviceService', () => {
  let service: PerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

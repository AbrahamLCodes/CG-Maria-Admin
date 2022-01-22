import { TestBed } from '@angular/core/testing';

import { StrapiClientService } from './strapiclient.service';

describe('ApiclientService', () => {
  let service: StrapiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrapiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

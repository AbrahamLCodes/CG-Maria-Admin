import { TestBed } from '@angular/core/testing';

import { UtileriasService } from './utileriasservice';

describe('ApiclientService', () => {
  let service: UtileriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtileriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
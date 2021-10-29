import { TestBed } from '@angular/core/testing';

import { DtservicioService } from './dtservicio.service';

describe('DtservicioService', () => {
  let service: DtservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DtservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

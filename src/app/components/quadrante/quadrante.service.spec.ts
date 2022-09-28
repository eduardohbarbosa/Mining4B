import { TestBed } from '@angular/core/testing';

import { QuadranteService } from './quadrante.service';

describe('QuadranteService', () => {
  let service: QuadranteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuadranteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

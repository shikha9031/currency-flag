import { TestBed } from '@angular/core/testing';

import { CurrencyFlagService } from './currency-flag.service';

describe('CurrencyFlagService', () => {
  let service: CurrencyFlagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyFlagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

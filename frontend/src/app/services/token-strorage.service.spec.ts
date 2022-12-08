import { TestBed } from '@angular/core/testing';

import { TokenStrorageService } from './token-strorage.service';

describe('TokenStrorageService', () => {
  let service: TokenStrorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenStrorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

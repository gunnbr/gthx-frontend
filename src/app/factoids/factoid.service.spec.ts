import { TestBed, inject } from '@angular/core/testing';

import { FactoidService } from './factoid.service';

describe('FactoidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FactoidService]
    });
  });

  it('should be created', inject([FactoidService], (service: FactoidService) => {
    expect(service).toBeTruthy();
  }));
});

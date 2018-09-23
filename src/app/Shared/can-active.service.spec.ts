import { TestBed, inject } from '@angular/core/testing';

import { CanActiveService } from './can-active.service';

describe('CanActiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActiveService]
    });
  });

  it('should be created', inject([CanActiveService], (service: CanActiveService) => {
    expect(service).toBeTruthy();
  }));
});

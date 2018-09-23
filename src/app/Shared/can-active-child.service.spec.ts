import { TestBed, inject } from '@angular/core/testing';

import { CanActiveChildService } from './can-active-child.service';

describe('CanActiveChildService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActiveChildService]
    });
  });

  it('should be created', inject([CanActiveChildService], (service: CanActiveChildService) => {
    expect(service).toBeTruthy();
  }));
});

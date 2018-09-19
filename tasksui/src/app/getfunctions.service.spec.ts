import { TestBed, inject } from '@angular/core/testing';

import { GetfunctionsService } from './getfunctions.service';

describe('GetfunctionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetfunctionsService]
    });
  });

  it('should be created', inject([GetfunctionsService], (service: GetfunctionsService) => {
    expect(service).toBeTruthy();
  }));
});

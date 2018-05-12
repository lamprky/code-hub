import { TestBed, inject } from '@angular/core/testing';

import { FormOptionsService } from './form-options.service';

describe('FormOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormOptionsService]
    });
  });

  it('should be created', inject([FormOptionsService], (service: FormOptionsService) => {
    expect(service).toBeTruthy();
  }));
});

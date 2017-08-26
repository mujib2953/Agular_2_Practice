import { TestBed, inject } from '@angular/core/testing';

import { MyCustomService } from './my-custom.service';

describe('MyCustomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyCustomService]
    });
  });

  it('should be created', inject([MyCustomService], (service: MyCustomService) => {
    expect(service).toBeTruthy();
  }));
});

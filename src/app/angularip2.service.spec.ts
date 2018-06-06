import { TestBed, inject } from '@angular/core/testing';

import { Angularip2Service } from './angularip2.service';

describe('Angularip2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Angularip2Service]
    });
  });

  it('should be created', inject([Angularip2Service], (service: Angularip2Service) => {
    expect(service).toBeTruthy();
  }));
});

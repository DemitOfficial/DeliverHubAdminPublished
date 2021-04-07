/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RiderService } from './rider.service';

describe('Service: Rider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RiderService]
    });
  });

  it('should ...', inject([RiderService], (service: RiderService) => {
    expect(service).toBeTruthy();
  }));
});

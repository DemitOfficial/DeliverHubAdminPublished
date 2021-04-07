/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeliveryFairService } from './DeliveryFair.service';

describe('Service: DeliveryFair', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeliveryFairService]
    });
  });

  it('should ...', inject([DeliveryFairService], (service: DeliveryFairService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RiderOrderService } from './riderorder.service';

describe('Service: RiderOrder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RiderOrderService]
    });
  });

  it('should ...', inject([RiderOrderService], (service: RiderOrderService) => {
    expect(service).toBeTruthy();
  }));
});

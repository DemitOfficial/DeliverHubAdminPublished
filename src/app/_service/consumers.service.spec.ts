/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsumersService } from './consumers.service';

describe('Service: Consumers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsumersService]
    });
  });

  it('should ...', inject([ConsumersService], (service: ConsumersService) => {
    expect(service).toBeTruthy();
  }));
});

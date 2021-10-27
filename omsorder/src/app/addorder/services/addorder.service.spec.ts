import { TestBed } from '@angular/core/testing';

import { AddorderService } from './addorder.service';

describe('AddorderService', () => {
  let service: AddorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { JManagementService } from './jmanagement.service';

describe('JManagementService', () => {
  let service: JManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

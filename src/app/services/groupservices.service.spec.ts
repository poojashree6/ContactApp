import { TestBed } from '@angular/core/testing';

import { GroupservicesService } from './groupservices.service';

describe('GroupservicesService', () => {
  let service: GroupservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

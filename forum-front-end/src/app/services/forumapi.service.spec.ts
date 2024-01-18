import { TestBed } from '@angular/core/testing';

import { ForumapiService } from './forumapi.service';

describe('ForumapiService', () => {
  let service: ForumapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

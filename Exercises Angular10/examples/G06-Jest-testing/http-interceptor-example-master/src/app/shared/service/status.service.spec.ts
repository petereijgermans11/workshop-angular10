import { TestBed } from '@angular/core/testing';

import { StatusService } from './status.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    });
});

  test('should be created', () => {
    const service: StatusService = TestBed.get(StatusService);
    expect(service).toBeTruthy();
  });
});

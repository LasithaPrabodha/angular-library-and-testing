import { TestBed } from '@angular/core/testing';

import { ExampleNg6LibService } from './example-ng6-lib.service';

describe('ExampleNg6LibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExampleNg6LibService = TestBed.get(ExampleNg6LibService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GetTestResultService } from './get-test-result.service';

describe('GetTestResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTestResultService = TestBed.get(GetTestResultService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AdmobfreeService } from './admobfree.service';

describe('AdmobfreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmobfreeService = TestBed.get(AdmobfreeService);
    expect(service).toBeTruthy();
  });
});

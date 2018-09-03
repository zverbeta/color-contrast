import { TestBed } from '@angular/core/testing';

import { ColorContrastService } from './color-contrast.service';

describe('ColorContrastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorContrastService = TestBed.get(ColorContrastService);
    expect(service).toBeTruthy();
  });
});

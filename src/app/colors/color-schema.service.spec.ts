import { TestBed } from '@angular/core/testing';

import { ColorSchemaService } from './color-schema.service';

describe('ColorSchemaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorSchemaService = TestBed.get(ColorSchemaService);
    expect(service).toBeTruthy();
  });
});

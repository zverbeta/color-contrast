import { ColorDetailsModule } from './color-details.module';

describe('ColorDetailsModule', () => {
  let colorDetailsModule: ColorDetailsModule;

  beforeEach(() => {
    colorDetailsModule = new ColorDetailsModule();
  });

  it('should create an instance', () => {
    expect(colorDetailsModule).toBeTruthy();
  });
});

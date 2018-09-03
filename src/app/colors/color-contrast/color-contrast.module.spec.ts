import { ColorContrastModule } from './color-contrast.module';

describe('ColorContrastModule', () => {
  let colorContrastModule: ColorContrastModule;

  beforeEach(() => {
    colorContrastModule = new ColorContrastModule();
  });

  it('should create an instance', () => {
    expect(colorContrastModule).toBeTruthy();
  });
});

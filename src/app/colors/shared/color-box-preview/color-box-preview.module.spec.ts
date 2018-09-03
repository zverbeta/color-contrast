import { ColorBoxPreviewModule } from './color-box-preview.module';

describe('ColorBoxPreviewModule', () => {
  let colorBoxPreviewModule: ColorBoxPreviewModule;

  beforeEach(() => {
    colorBoxPreviewModule = new ColorBoxPreviewModule();
  });

  it('should create an instance', () => {
    expect(colorBoxPreviewModule).toBeTruthy();
  });
});

import { ColorFormModule } from './color-form.module';

describe('ColorFormModule', () => {
  let colorFormModule: ColorFormModule;

  beforeEach(() => {
    colorFormModule = new ColorFormModule();
  });

  it('should create an instance', () => {
    expect(colorFormModule).toBeTruthy();
  });
});

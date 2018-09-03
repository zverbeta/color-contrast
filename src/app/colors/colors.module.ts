import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ColorsComponent } from './colors.component';
import { ColorFormModule } from './color-form/color-form.module';
import { ColorContrastModule } from './color-contrast/color-contrast.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ColorFormModule,
    ColorContrastModule
  ],
  declarations: [
    ColorsComponent
  ],
  exports: [
    ColorsComponent
  ]
})
export class ColorsModule { }

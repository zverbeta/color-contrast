import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ColorsComponent } from './colors.component';
import { ColorFormModule } from './color-form/color-form.module';
import { ColorContrastModule } from './color-contrast/color-contrast.module';
import { ColorsRoutingModule } from './colors-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ColorsRoutingModule,
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

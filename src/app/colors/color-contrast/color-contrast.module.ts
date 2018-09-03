import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorContrastComponent } from './color-contrast.component';
import { MatIconModule, MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ColorBoxPreviewModule } from '../shared/color-box-preview/color-box-preview.module';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    ColorBoxPreviewModule,
    MatDividerModule,
    FlexLayoutModule
  ],
  declarations: [ColorContrastComponent],
  exports: [ColorContrastComponent]
})
export class ColorContrastModule { }

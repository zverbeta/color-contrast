import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorBoxPreviewComponent } from './color-box-preview.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [ColorBoxPreviewComponent],
  exports: [ColorBoxPreviewComponent]
})
export class ColorBoxPreviewModule { }

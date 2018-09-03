import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorContrastComponent } from './color-contrast.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ColorContrastComponent],
  exports: [ColorContrastComponent]
})
export class ColorContrastModule { }

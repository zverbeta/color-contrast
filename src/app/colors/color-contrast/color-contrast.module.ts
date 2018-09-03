import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorContrastComponent } from './color-contrast.component';
import { MatIconModule, MatListModule, MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    FlexLayoutModule
  ],
  declarations: [ColorContrastComponent],
  exports: [ColorContrastComponent]
})
export class ColorContrastModule { }

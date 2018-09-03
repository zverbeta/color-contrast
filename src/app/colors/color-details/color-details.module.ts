import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorDetailsComponent } from './color-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ColorModelPipe } from '../color-model.pipe';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [ColorDetailsComponent, ColorModelPipe],
  exports: [ColorDetailsComponent]
})
export class ColorDetailsModule { }

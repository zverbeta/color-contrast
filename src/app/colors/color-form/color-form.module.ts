import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorFormComponent } from './color-form.component';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ColorDetailsModule } from '../color-details/color-details.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    ColorDetailsModule
  ],
  declarations: [ColorFormComponent],
  exports: [ColorFormComponent]
})
export class ColorFormModule { }

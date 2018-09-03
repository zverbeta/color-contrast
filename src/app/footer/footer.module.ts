import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }

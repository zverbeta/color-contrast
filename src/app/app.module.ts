import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import {MatIconRegistry, MatSidenavModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ColorsModule } from './colors/colors.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatSidenavModule,
    ColorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private iconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    iconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('assets/icons-set.svg'));
  }
}

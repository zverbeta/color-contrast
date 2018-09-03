import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MatIconRegistry } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule
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

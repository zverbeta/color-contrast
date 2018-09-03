import { Component, OnInit } from '@angular/core';
import { ColorSchemaService } from './color-schema.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  schemas$: Observable<any>;

  colorText: any;
  colorBackground: any;
  colorList: any;

  constructor(
    private colorSchemaService: ColorSchemaService
  ) {

  }

  ngOnInit() {
    this.schemas$ = this.colorSchemaService.loadColorSchemas();
  }

  selectColors({colorText, colorBackground}) {
    this.colorText = colorText;
    this.colorBackground = colorBackground;
  }

  selectSchemaColors(schemaColors) {
    this.colorList = schemaColors;
  }
}

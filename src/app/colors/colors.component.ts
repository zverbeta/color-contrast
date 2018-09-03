import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  selectColorText: any;
  selectColorBackground: any;

  constructor(
    private route: ActivatedRoute,
    private colorSchemaService: ColorSchemaService
  ) {

  }

  ngOnInit() {
    this.schemas$ = this.colorSchemaService.loadColorSchemas();

    this.route.queryParamMap.subscribe((queryParamMap) => {
      const palleteId = +queryParamMap.get('palleteId');
      const bgColorId = +queryParamMap.get('bgColorId');
      const textColorId = +queryParamMap.get('textColorId');
    })
  }

  selectColors({colorText, colorBackground}) {
    this.colorText = colorText;
    this.colorBackground = colorBackground;
  }

  selectSchemaColors(schemaColors) {
    this.colorList = schemaColors;
  }

  changeSelectedTextColor(color) {
    this.selectColorText = color;
  }

  changeSelectedBackgroundColor(color) {
    this.selectColorBackground = color;
  }
}

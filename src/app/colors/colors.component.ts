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

  constructor(
    private colorSchemaService: ColorSchemaService
  ) {

  }

  ngOnInit() {
    this.schemas$ = this.colorSchemaService.loadColorSchemas();
  }

  selectColors(a) {
    console.log(a);
  }

}

import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/internal/operators';
import { merge } from 'rxjs/internal/observable/merge';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {
  @Input() colorSchemas: any;

  colorSchema: FormControl = new FormControl('');
  colorText: FormControl = new FormControl('');
  colorBackground: FormControl = new FormControl('');

  selectedColorSchema$: Observable<any>;
  selectedColorText$: Observable<any>;
  selectedColorBackground$: Observable<any>;

  selectedColors: EventEmitter<any> = new EventEmitter<any>();

  constructor(
  ) { }

  ngOnInit() {
    this.selectedColorSchema$ = this.colorSchema.valueChanges.pipe(map(schema => schema.colors));
    this.selectedColorText$ = this.colorText.valueChanges.pipe(map(color => color));
    this.selectedColorBackground$ = this.colorBackground.valueChanges.pipe(map(color => color));


    merge(this.colorText.valueChanges, this.colorBackground.valueChanges).pipe(
      startWith({}),
      map(() => ({
        colorText: this.colorText.value,
        colorBackground: this.colorBackground.value
      }))
    ).subscribe(({colorText, colorBackground}) => {
      if (colorText && colorBackground) {
        console.log(colorText, colorBackground)
       
      }

      
    });
  }
}

import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith, tap } from 'rxjs/internal/operators';
import { merge } from 'rxjs/internal/observable/merge';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorFormComponent implements OnInit, OnChanges {
  @Input() colorSchemas = [];
  @Input() selectColorText: any;
  @Input() selectColorBackground: any;

  colorSchema: FormControl = new FormControl('');
  colorText: FormControl = new FormControl('');
  colorBackground: FormControl = new FormControl('');

  selectedColorSchema$: Observable<any>;
  selectedColorText$: Observable<any>;
  selectedColorBackground$: Observable<any>;

  @Output() selectedColors: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectedSchemas: EventEmitter<any> = new EventEmitter<any>();

  constructor(
  ) { }

  ngOnInit() {
    this.selectedColorSchema$ = this.colorSchema.valueChanges.pipe(
      map(schema => schema.colors),
      tap((selectedSchemaColors) => {
        if (selectedSchemaColors.length > 1) {
          this.colorText.setValue(selectedSchemaColors[0]);
          this.colorBackground.setValue(selectedSchemaColors[0]);
        }

        this.selectedSchemas.next(selectedSchemaColors)
      })
    )
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
        this.selectedColors.emit({colorText, colorBackground});
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.colorSchemas && this.colorSchemas.length > 1) {
      this.colorSchema.setValue(this.colorSchemas[0]);
    }

    if (this.selectColorText) {
      this.colorText.setValue(this.selectColorText);
    }

    if (this.selectColorBackground) {
      this.colorBackground.setValue(this.selectColorBackground);
    }
  }
}

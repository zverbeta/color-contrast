import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-color-box-preview',
  templateUrl: './color-box-preview.component.html',
  styleUrls: ['./color-box-preview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorBoxPreviewComponent implements OnInit {
  @Input() colorHex: string;
  @Input() colorCode: string;

  constructor() { }

  ngOnInit() {
  }

}

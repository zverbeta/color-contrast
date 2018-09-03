import { Component, OnInit, Input, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { ColorContrastService } from '../color-contrast.service';

@Component({
  selector: 'app-color-contrast',
  templateUrl: './color-contrast.component.html',
  styleUrls: ['./color-contrast.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorContrastComponent implements OnInit {
  @Input() colorText: any = {
    hex: ''
  };
  @Input() colorBackground: any = { 
    hex: ''
  };
  @Input() colorList = [];

  colorContrastDiff = 0;
  closetsForColorText = [];
  closetsForColorBackground = []

  constructor(
    private colorContrastService: ColorContrastService
  ) { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.colorText && this.colorBackground) {
      this.colorContrastDiff = this.colorContrastService.getContrastDifference(this.colorText.lvrNumeric, this.colorBackground.lvrNumeric);
      this.closetsForColorText = this.colorContrastService.getClosetsColors(this.colorList, this.colorText);
      this.closetsForColorBackground = this.colorContrastService.getClosetsColors(this.colorList, this.colorBackground);
    }
  }

}

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-color-details',
  templateUrl: './color-details.component.html',
  styleUrls: ['./color-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorDetailsComponent implements OnInit {
  @Input() color: any;


  constructor() { }

  ngOnInit() {
  }

}

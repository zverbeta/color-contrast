import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorContrastService {

  constructor() { }

  getContrastDifference(colorA, colorB) {
    return colorA > colorB 
      ? Math.round((colorA - colorB) * 100 / colorA) 
      : Math.round((colorB - colorA) * 100 / colorB);
  }

  getSmalestContrast(color) {
    return Math.floor(3 * color / 10);
  }

  getBiggestContrast(color) {
    return Math.ceil(10 * color / 3);
  }

  colorDistance(colorA, colorB) {
    let rmean = (colorA[0] + colorB[0]) / 2;
    let r = colorA[0] - colorB[0];
    let g = colorA[1] - colorB[1];
    let b = colorA[2] - colorB[2];
    //https://www.compuphase.com/cmetric.htm
    return Math.sqrt((((512+rmean)*r*r)/256) + 4*g*g + (((767-rmean)*b*b)/256));
  }

  compareDistance(colorA, colorB, baseColor) {
    return this.colorDistance(colorA, baseColor) - this.colorDistance(colorB, baseColor);
  }
}

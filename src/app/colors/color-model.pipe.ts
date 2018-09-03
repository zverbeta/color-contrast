import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorModel'
})
export class ColorModelPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.length > 4 ? value.substring(0, 3) : value
  }

}

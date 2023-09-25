import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readable'
})
export class ReadablePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
  }

}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: any[], num: number): any[] {
    return value.slice(0, num);
  }

}
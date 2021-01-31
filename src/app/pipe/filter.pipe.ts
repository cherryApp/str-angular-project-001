import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], phrase: string): any {
    if (!phrase) {
      return value;
    }
    phrase = ('' + phrase).toLowerCase();
    return value.filter((item) => {
      let isOK: boolean = false;
      for (let k in item) {
        let check = item[k].toString().toLowerCase();
        if (check.indexOf(phrase) > -1) {
          isOK = true;
        }
      }
      return isOK;
    });
}
}

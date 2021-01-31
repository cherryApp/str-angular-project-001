import { Input, Pipe, PipeTransform } from '@angular/core';
import { exit } from 'process';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(value: any[], phrase: string, key: string, catid: number): any[] {
    
    if (!Array.isArray(value) || !key || !catid) {
      return value;
    }

    phrase = ('' + phrase).toLowerCase();

    return value.filter( item => {
        if (item['catId'] === catid) {
          const strItem:string = ('' + item[key]).toLowerCase();
          return strItem.includes(phrase);
        } else {}
    });

  }

}

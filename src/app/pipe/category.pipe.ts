import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any[], cat: number): any[] {
    return value.filter( item => {
      return item['catId'] === cat;
    });
  }
  
}
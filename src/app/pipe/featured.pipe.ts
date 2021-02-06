import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'featured'
})
export class FeaturedPipe implements PipeTransform {

  transform(value: any[], featured: boolean): any[] {
    return value.filter( item => {
      return item['featured'] === featured;
    });
  }

}

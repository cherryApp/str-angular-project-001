import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomize'
})
export class RandomizePipe implements PipeTransform {

  transform(value: any[]): any[] {
    return value.sort( () => Math.random() - 0.5);
  }

}
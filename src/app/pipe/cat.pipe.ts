import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Cat'
})

export class CatPipe implements PipeTransform {

  transform(value: any[], cat: number): any[] {
    
    if (!Array.isArray(value) || !cat) {
      return value;
    }

    const shuffle = (array) => {
      let currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    }

    const size = 5;
    if (cat > -1) {
      if (cat === 999) {
        const arr =  value.filter( item => {
          return item;
        });
        return shuffle(arr).slice(0, size);
      } else {
        const arr =  value.filter( item => {
          if (item['catId'] === cat) return item;
        });
        return  shuffle(arr).slice(0, size);
      }
    } else {
      const arr =  value.filter( item => {
        if (item['featured'] === true) return item;
      });
      return  shuffle(arr).slice(0, size);
    }

  }

}
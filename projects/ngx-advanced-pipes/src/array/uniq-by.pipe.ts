import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqBy'
})
export class UniqByPipe implements PipeTransform {
  transform(myArr: any, prop: any, type?: any): any {
    return myArr.filter((obj, pos, arr) => {
      const arrayObj = arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]);
      if (type === '!') {
        return arrayObj !== pos;
      }
      return arrayObj === pos;
    });
  }
}

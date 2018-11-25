import { Pipe, PipeTransform } from '@angular/core';
import { UniqByPipe } from '../array/uniq-by.pipe';

@Pipe({
  name: 'uniqByCollection'
})
export class UniqByCollectionPipe implements PipeTransform {
  transform(array1: any, array2: any, prop: any): any {
    try {
      return array1.filter(ele1 => {
        return !array2.some(ele2 => ele1[prop] === ele2[prop]);
      });
    } catch (err) {
      return err;
    }
  }
}

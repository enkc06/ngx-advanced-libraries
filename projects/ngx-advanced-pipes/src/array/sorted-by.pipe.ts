import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortedBy'
})
export class SortedByPipe implements PipeTransform {
  transform(array: any, type?: string): any {
    if (type === 'desc') {
      return array.sort((a, b) => b - a);
    }
    return array.sort((a, b) => a - b);
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenLargeNumber'
})
export class ShortenLargeNumberPipe implements PipeTransform {
  transform(value: number, type: string, digits: number): any {
    if (value) {
      const si: any = [
        { value: 1e18, symbol: 'E' },
        { value: 1e15, symbol: 'P' },
        { value: 1e12, symbol: 'T' },
        { value: 1e9, symbol: 'G' },
        { value: 1e6, symbol: 'M' },
        { value: 1e3, symbol: 'k' }
      ];
      const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;

      for (let i = 0; i < si.length; i++) {
        if (value >= si[i].value) {
          const val =
            (value / si[i].value).toFixed(digits).replace(rx, '$1') +
            si[i].symbol;
          return type === 'currency' ? '$' + val : val;
        }
      }

      const val2 = value.toFixed(digits).replace(rx, '$1');
      return type === 'currency' ? '$' + val2 : val2;
    } else {
      return type === 'currency' ? '$' + 0 : 0;
    }
  }
}

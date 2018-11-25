import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  constructor() {}

  // filter within array of object alphabetically
  filtrArrayObjectAlphabetically(array, prop) {
    return array.sort((a, b) => a[prop].localeCompare(b[prop]));
  }

  uniqFilterArrayObject(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

  notuniqFilterArrayObject(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) !== pos;
    });
  }
}

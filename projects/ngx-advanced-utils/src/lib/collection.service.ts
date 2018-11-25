import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  constructor() {}

  // filter with two array of objects by prop
  filterTwoArrayOfObjectsByProp(array1, array2, prop) {
    return array1.filter(ele1 => {
      return array2.some(ele2 => ele1[prop] === ele2[prop]);
    });
  }

  // uniq filter with two array of objects by prop
  UniqFilterTwoArrayOfObjectsByProp(array1, array2, prop) {
    return array1.filter(ele1 => {
      return !array2.some(ele2 => ele1[prop] === ele2[prop]);
    });
  }

  // uniq filter with two array of objects by prop and removingDuplicates
  uniqFilterTwoArrayOfObjectsByPropAndRemoveDuplicates(array1, array2, prop) {
    const newArr = array1.filter(ele1 => {
      return array2.some(ele2 => ele1[prop] === ele2[prop]);
    });

    return newArr.filter((obj, pos, arr) => {
      const arrayObj = arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]);
      return arrayObj === pos;
    });
  }

  // notuniq filter with two array of objects by prop and removingDuplicates
  notUniqFilterTwoArrayOfObjectsByPropAndRemoveDuplicates(
    array1,
    array2,
    prop
  ) {
    const newArr = array1.filter(ele1 => {
      return array2.some(ele2 => ele1[prop] === ele2[prop]);
    });

    return newArr.filter((obj, pos, arr) => {
      const arrayObj = arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]);
      return arrayObj !== pos;
    });
  }

  // filter array of objects with array with array by prop
  filterArrayOfObjectsArrayWithArrayByProp(array1, array2, prop) {
    return array1.filter(ele1 => {
      return array2.some(ele2 => ele1[prop].includes(ele2));
    });
  }

  // uniq filter array of objects array with array by prop
  uniqFilterArrayOfObjectsArrayWithArrayByProp(array1, array2, prop) {
    return array1.filter(ele1 => {
      return !array2.some(ele2 => ele1[prop].includes(ele2));
    });
  }

  // filter array of objects array with array of objects by prop
  filterArrayOfObjectsArrayWithArrayOfObjectsByProp(array1, array2, prop) {
    return array1.filter(ele1 => {
      return array2.some(ele2 => ele1[prop].includes(ele2[prop]));
    });
  }

  // uniq filter array of objects array with array of objects by prop
  uniqFilterArrayOfObjectsArrayWithArrayOfObjectsByProp(array1, array2, prop) {
    return array1.filter(ele1 => {
      return !array2.some(ele2 => ele1[prop].includes(ele2[prop]));
    });
  }
}

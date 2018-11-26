import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  constructor() {}

  // filter with two array of objects by prop
  filterTwoArrayOfObjectsByProp(
    array1: any[],
    array2: any[],
    prop1: string,
    prop2: string
  ) {
    return array1.filter(ele1 => {
      return array2.some(ele2 => ele1[prop1] === ele2[prop2]);
    });
  }

  // uniq filter with two array of objects by prop
  UniqFilterTwoArrayOfObjectsByProp(
    array1: any[],
    array2: any[],
    prop1: string,
    prop2: string
  ) {
    return array1.filter(ele1 => {
      return !array2.some(ele2 => ele1[prop1] === ele2[prop2]);
    });
  }

  // uniq filter with two array of objects by prop and removingDuplicates
  uniqFilterTwoArrayOfObjectsByPropAndRemoveDuplicates(
    array1: any[],
    array2: any[],
    prop1: string,
    prop2: string
  ) {
    return array1
      .filter(ele1 => {
        return array2.some(ele2 => ele1[prop1] === ele2[prop2]);
      })
      .filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop1]).indexOf(obj[prop2]) === pos;
      });
  }

  // notuniq filter with two array of objects by prop and removingDuplicates
  notUniqFilterTwoArrayOfObjectsByPropAndRemoveDuplicates(
    array1: any[],
    array2: any[],
    prop1: string,
    prop2: string
  ) {
    return array1
      .filter(ele1 => {
        return array2.some(ele2 => ele1[prop1] === ele2[prop2]);
      })
      .filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop1]).indexOf(obj[prop2]) !== pos;
      });
  }

  // filter array of objects with array with array by prop
  filterArrayOfObjectsArrayWithArrayByProp(
    array1: any[],
    array2: any[],
    prop: string
  ) {
    return array1.filter(ele1 => {
      return array2.some(ele2 => ele1[prop].includes(ele2));
    });
  }

  // uniq filter array of objects array with array by prop
  uniqFilterArrayOfObjectsArrayWithArrayByProp(
    array1: any[],
    array2: any[],
    prop: string
  ) {
    return array1.filter(ele1 => {
      return !array2.some(ele2 => ele1[prop].includes(ele2));
    });
  }

  // filter array of objects array with array of objects by prop
  filterArrayOfObjectsArrayWithArrayOfObjectsByProp(
    array1: any[],
    array2: any[],
    prop1: string,
    prop2: string
  ) {
    return array1.filter(ele1 => {
      return array2.some(ele2 => ele1[prop1].includes(ele2[prop2]));
    });
  }

  // uniq filter array of objects array with array of objects by prop
  uniqFilterArrayOfObjectsArrayWithArrayOfObjectsByProp(
    array1: any[],
    array2: any[],
    prop1: string,
    prop2: string
  ) {
    return array1.filter(ele1 => {
      return !array2.some(ele2 => ele1[prop1].includes(ele2[prop2]));
    });
  }
}

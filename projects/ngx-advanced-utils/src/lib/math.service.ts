import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  constructor() {}

  distanceBetweenOrigins(destination: any, origin: any) {
    try {
      const p = 0.017453292519943295; // This is  Math.PI / 180
      const c = Math.cos;
      const a =
        0.5 -
        c((origin[0] - destination[0]) * p) / 2 +
        (c(destination[0] * p) *
          c(origin[0] * p) *
          (1 - c((origin[1] - destination[1]) * p))) /
          2;
      const R = 6371; //  Earth distance in km so it will return the distance in km
      const dist = 2 * R * Math.asin(Math.sqrt(a));
      return (0.62137 * dist).toFixed(1); // distance into miles
    } catch (ex) {
      return ex;
    }
  }
}

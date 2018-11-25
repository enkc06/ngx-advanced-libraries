import { Component, OnInit } from '@angular/core';
import { AutocompleteAddressPipe } from 'ngx-advanced-pipes';
import { MathService } from 'ngx-advanced-utils';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AutocompleteAddressPipe]
})
export class AppComponent implements OnInit {
  title = 'ngx-pipes';

  arrayObj = [
    {
      card: 1234
    },
    {
      card: 1234
    },
    {
      card: 12345
    },
    {
      card: 12346
    }
  ];

  arrayObj2 = [
    {
      card: 1234
    },
    {
      card: 1234
    },
    {
      card: 12345
    }
  ];

  arraySort = [2, 3, 1, 9, 8];

  addressAutocompleteData: any = {
    address_components: [
      { long_name: '4453', short_name: '4453', types: ['street_number'] },
      {
        long_name: 'Ashford Dunwoody Road Northeast',
        short_name: 'Ashford Dunwoody Rd NE',
        types: ['route']
      },
      {
        long_name: 'Perimeter Center',
        short_name: 'Perimeter Center',
        types: ['neighborhood', 'political']
      },
      {
        long_name: 'Atlanta',
        short_name: 'Atlanta',
        types: ['locality', 'political']
      },
      {
        long_name: 'DeKalb County',
        short_name: 'Dekalb County',
        types: ['administrative_area_level_2', 'political']
      },
      {
        long_name: 'Georgia',
        short_name: 'GA',
        types: ['administrative_area_level_1', 'political']
      },
      {
        long_name: 'United States',
        short_name: 'US',
        types: ['country', 'political']
      },
      { long_name: '30346', short_name: '30346', types: ['postal_code'] },
      { long_name: '1505', short_name: '1505', types: ['postal_code_suffix'] }
    ],
    adr_address:
      '<span class="street-address">4453 Ashford Dunwoody Rd NE</span>, <span class="locality">Atlanta</span>, <span class="region">GA</span> <span class="postal-code">30346-1505</span>, <span class="country-name">USA</span>',
    formatted_address: '4453 Ashford Dunwoody Rd NE, Atlanta, GA 30346, USA',
    geometry: {
      location: { lat: 33.9226408, lng: -84.33797700000002 },
      viewport: {
        south: 33.9213511197085,
        west: -84.33951193029151,
        north: 33.9240490802915,
        east: -84.33681396970849
      }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png',
    id: '1560a05c273ad1fabdd5d05e745b754c1a3ba859',
    name: '4453 Ashford Dunwoody Rd NE',
    place_id: 'ChIJz6UeUUMJ9YgR8E0S5apaJxA',
    reference: 'ChIJz6UeUUMJ9YgR8E0S5apaJxA',
    scope: 'GOOGLE',
    types: ['premise'],
    url:
      'https://maps.google.com/?q=4453+Ashford+Dunwoody+Rd+NE,+Atlanta,+GA+30346,+USA&ftid=0x88f50943511ea5cf:0x10275aaae5124df0',
    utc_offset: -300,
    vicinity: 'Atlanta',
    html_attributions: []
  };

  origin = [33.92865, -84.30728];
  destination = [33.96953, -84.26158];

  constructor(
    public AutocompleteAddress: AutocompleteAddressPipe,
    public _math: MathService
  ) {}

  alphaArray = [{ id: 'b' }, { id: 'a' }, { id: 'ab' }, { id: 'ba' }];

  ngOnInit() {
    // console.log(
    //   this.AutocompleteAddress.transform(this.addressAutocompleteData)
    // );

    // console.log(
    //   this.filterPropertyLabels1(this.arrayObj4, this.arrayObj5, 'card')
    // );

    console.log(this.filtrarrayObject(this.alphaArray, 'id'));

    console.log(
      this._math.distanceBetweenOrigins(this.destination, this.origin)
    );
  }

  // filter with array of objects with array of objects
  filterByele(array1, array2, prop) {
    return array1.filter(ele1 => {
      return array2.some(ele2 => ele1[prop] === ele2[prop]);
    });
  }

  // uniq filter with array of objects with array of objects and removingDuplicates
  filterByele2Uniq(array1, array2, prop) {
    const newArr = array1.filter(ele1 => {
      return array2.some(ele2 => ele1[prop] === ele2[prop]);
    });

    return newArr.filter((obj, pos, arr) => {
      const arrayObj = arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]);
      return arrayObj === pos;
    });
  }

  // notuniq filter with array of objects with array of objects and removingDuplicates
  filterByele2(array1, array2, prop) {
    const newArr = array1.filter(ele1 => {
      return array2.some(ele2 => ele1[prop] === ele2[prop]);
    });

    return newArr.filter((obj, pos, arr) => {
      const arrayObj = arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]);
      return arrayObj !== pos;
    });
  }

  // uniq filter with array of objects with array of objects
  filterByeleUniq(array1, array2, prop) {
    return array1.filter(ele1 => {
      return !array2.some(ele2 => ele1[prop] === ele2[prop]);
    });
  }

  arrayObj4 = [
    {
      card: [1234, 12345]
    },
    {
      card: [1234]
    },
    {
      card: [12345]
    }
  ];

  arrayObj3 = [{ card: 1234 }, { card: 123456 }];

  arrayObj5 = [12345];

  // array of objects with array filter with array
  filterPropertyLabels1(array1, array2, prop) {
    return array1.filter(ele1 => {
      return array2.some(ele2 => ele1[prop].includes(ele2));
    });
  }

  // uniq array of objects with array filter with array
  filterPropertyLabels1Uniq(array1, array2, prop) {
    return array1.filter(ele1 => {
      return !array2.some(ele2 => ele1[prop].includes(ele2));
    });
  }

  // array of objects with array filter with array of objects
  filterPropertyLabels(array1, array2, prop) {
    return array1.filter(ele1 => {
      return array2.some(ele2 => ele1[prop].includes(ele2[prop]));
    });
  }

  // uniq array of objects with array filter with array of objects
  filterPropertyLabelsUniq(array1, array2, prop) {
    return array1.filter(ele1 => {
      return !array2.some(ele2 => ele1[prop].includes(ele2[prop]));
    });
  }

  // filter within array of object alphabetically
  filtrarrayObject(array, prop) {
    return array.sort((a, b) => a[prop].localeCompare(b[prop]));
  }

  // Calculate the difference of two dates in total days
  diffDays(d1) {
    const one_day = 1000 * 60 * 60 * 24;
    const tv1: any = new Date();

    let tv2: any = new Date(d1);
    tv2 = tv2.setMonth(tv2.getMonth() + 1);
    tv2 = new Date(tv2);

    let ndays = tv2 - tv1;

    // Convert back to days and return
    ndays = Math.round(ndays / one_day);
    return ndays;
  }
}

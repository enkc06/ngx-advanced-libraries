import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AggregateService {
  constructor() {}

  autocompleteAddress(place) {
    const returnAddress = {
      format: '',
      address: '',
      county: '',
      city: '',
      state: '',
      zip: ''
    };
    for (let i = 0; i < place.address_components.length; i++) {
      returnAddress.format = place.formatted_address;
      const addressType = place.address_components[i].types[0];
      switch (addressType) {
        case 'street_number':
          returnAddress['address'] += place.address_components[i]['short_name'];
          break;
        case 'route':
          returnAddress['address'] +=
            ' ' + place.address_components[i]['short_name'];
          break;
        case 'administrative_area_level_2':
          returnAddress['county'] += place.address_components[i]['short_name'];
          break;
        case 'sublocality_level_1':
          returnAddress['city'] = place.address_components[i]['short_name'];
          break;
        case 'locality':
          returnAddress['city'] = place.address_components[i]['short_name'];
          break;
        case 'administrative_area_level_1':
          returnAddress['state'] += place.address_components[i]['short_name'];
          break;
        case 'postal_code':
          returnAddress['zip'] += place.address_components[i]['short_name'];
          break;
      }
    }

    return returnAddress;
  }
}

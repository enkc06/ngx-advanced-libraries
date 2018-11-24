# Aggregate

## Formatted Address

#### File:

```
import { AutocompleteAddressPipe } from 'ngx-advanced-pipes';
```

#### Usage

```javascript
//in html
{{ addressAutocompleteData | autocompleteAddress | json }}
```

```javascript
// in .ts file
new AutocompleteAddressPipe().transform(this.addressAutocompleteData)
```


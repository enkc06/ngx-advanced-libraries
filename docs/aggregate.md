# Aggregate

### Formatted Address

**File**

```typescript
import { AutocompleteAddressPipe } from 'ngx-advanced-pipes';
```

**Usage**

```typescript
// inside .html
{{ addressAutocompleteData | autocompleteAddress | json }}
```

```typescript
// inside .ts
new AutocompleteAddressPipe().transform(this.addressAutocompleteData)
```




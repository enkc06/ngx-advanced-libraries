import { NgModule } from '@angular/core';
import { AutocompleteAddressPipe } from './autocomplete-address.pipe';

@NgModule({
  declarations: [AutocompleteAddressPipe],
  exports: [AutocompleteAddressPipe]
})
export class NgxAggregatePipesModule {}

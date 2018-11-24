import { NgModule } from '@angular/core';
import { AutocompleteAddressPipe } from './autocomplete-address.pipe';
import { ShortenLargeNumberPipe } from '../aggregate/shorten-large-number-pipe.pipe';

@NgModule({
  declarations: [AutocompleteAddressPipe, ShortenLargeNumberPipe],
  exports: [AutocompleteAddressPipe, ShortenLargeNumberPipe]
})
export class NgxAggregatePipesModule {}

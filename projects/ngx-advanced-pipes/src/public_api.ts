/*
 * Public API Surface of ngx-advanced-pipes
 */

export { NgxAggregatePipesModule } from './aggregate/aggregate.module';
export { NgxMathPipesModule } from './math/math.module';
export { NgxArrayPipesModule } from './array/array.module';
export { NgxCollectionPipesModule } from './collection/collection.module';

export { NgxAdvancedPipesModule } from './pipes.module';

export { AutocompleteAddressPipe } from './aggregate/autocomplete-address.pipe';

export { UniqByPipe } from './array/uniq-by.pipe';
export { SortedByPipe } from './array/sorted-by.pipe';

export { UniqByCollectionPipe } from './collection/uniq-by-collection.pipe';

export { ShortenLargeNumberPipe } from './math/shorten-large-number-pipe.pipe';
export {
  DistanceBetweenOriginsPipe
} from './math/distance-between-origins.pipe';

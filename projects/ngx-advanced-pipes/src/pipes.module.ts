import { NgModule } from '@angular/core';

import { NgxAggregatePipesModule } from './aggregate/aggregate.module';
import { NgxMathPipesModule } from './math/math.module';
import { NgxArrayPipesModule } from './array/array.module';
import { NgxCollectionPipesModule } from './collection/collection.module';

@NgModule({
  exports: [
    NgxAggregatePipesModule,
    NgxMathPipesModule,
    NgxArrayPipesModule,
    NgxCollectionPipesModule
  ],
  declarations: []
})
export class NgxAdvancedPipesModule {}

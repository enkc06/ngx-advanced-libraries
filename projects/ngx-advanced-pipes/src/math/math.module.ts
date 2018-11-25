import { NgModule } from '@angular/core';

import { ShortenLargeNumberPipe } from './shorten-large-number-pipe.pipe';
import { DistanceBetweenOriginsPipe } from './distance-between-origins.pipe';

@NgModule({
  declarations: [ShortenLargeNumberPipe, DistanceBetweenOriginsPipe],
  exports: [ShortenLargeNumberPipe, DistanceBetweenOriginsPipe]
})
export class NgxMathPipesModule {}

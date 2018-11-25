import { NgModule } from '@angular/core';

import { ShortenLargeNumberPipe } from './shorten-large-number-pipe.pipe';
@NgModule({
  declarations: [ShortenLargeNumberPipe],
  exports: [ShortenLargeNumberPipe]
})
export class NgxMathPipesModule {}

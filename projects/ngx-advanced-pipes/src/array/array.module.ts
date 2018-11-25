import { NgModule } from '@angular/core';

import { UniqByPipe } from './uniq-by.pipe';
import { SortedByPipe } from './sorted-by.pipe';

@NgModule({
  declarations: [UniqByPipe, SortedByPipe],
  exports: [UniqByPipe, SortedByPipe]
})
export class NgxArrayPipesModule {}

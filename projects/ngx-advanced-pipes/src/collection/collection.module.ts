import { NgModule } from '@angular/core';

import { UniqByCollectionPipe } from './uniq-by-collection.pipe';

@NgModule({
  declarations: [UniqByCollectionPipe],
  exports: [UniqByCollectionPipe]
})
export class NgxCollectionPipesModule {}

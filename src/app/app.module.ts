import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxAdvancedPipesModule } from 'ngx-advanced-pipes';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxAdvancedPipesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ExampleNg6LibModule } from 'example-ng6-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExampleNg6LibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

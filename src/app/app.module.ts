import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from "./material/material.module";
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './core/containers/app.component';
import {CoreModule} from "./core/core.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

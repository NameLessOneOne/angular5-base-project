import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../material/material.module";
import {NotFoundPageComponent} from "./containers/not-found-page.component";

export const COMPONENTS = [
  MainPageComponent,
  NotFoundPageComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}

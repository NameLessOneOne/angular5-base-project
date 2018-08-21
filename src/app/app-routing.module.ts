import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundPageComponent} from "./core/containers/not-found-page.component";
import {MainPageComponent} from "./core/components/main-page/main-page.component";

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

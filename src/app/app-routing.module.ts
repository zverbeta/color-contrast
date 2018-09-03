import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorsRoutingModule } from './colors/colors-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [
    ColorsRoutingModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';

import {Component1} from './component1-component/component1-component.component';
import {Component2} from './component2-component/component2-component.component';
import {Component3} from './component3-component/component3-component.component';
import { Routes, RouterModule } from '@angular/router';
export const routes: Routes = [
    { path: '', component: Component1 },
    { path: 'component2', component: Component2 },
    { path: 'component3', component: Component3 },
  ];

@NgModule({
  imports: [RouterModule],
  exports: []
})
export class MemberRoutingModule { }

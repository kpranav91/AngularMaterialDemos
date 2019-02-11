import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Component1} from './component1-component/component1-component.component';
import {Component2} from './component2-component/component2-component.component';
import {Component3} from './component3-component/component3-component.component';

import { MemberRoutingModule } from './members-routing.module';
import { RouterModule } from '@angular/router';
import {routes} from './members-routing.module';

@NgModule({
  declarations: [Component1,Component2,Component3],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MembersModule { }

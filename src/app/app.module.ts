import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateMemberComponent } from './modules/members/create-member/create-member.component';
import { SharedModule } from './shared/shared.module';
import { ApiService } from './core/services';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './errors/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateMemberComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

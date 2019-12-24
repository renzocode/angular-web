import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxWebstorageModule} from 'ngx-webstorage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewcomponentComponent } from './viewcomponent/viewcomponent.component';
import { RouterviewComponent } from './routerview/routerview.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ConfirmUserComponent } from './confirm-user/confirm-user.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewcomponentComponent,
    RouterviewComponent,
    RegisterUserComponent,
    ConfirmUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

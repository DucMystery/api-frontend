import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CategoriesModule} from './categories/categories.module';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './users/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UsersComponent} from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CategoriesModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

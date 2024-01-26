import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AuthComponent} from "./auth/auth.component";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {AppRoutingModule} from "./app-routing.module";
import {RecipesModule} from "./recipe/recipes.module";
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

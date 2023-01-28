import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageMainComponent } from './page-main/page-main.component';
import { PageProductFormComponent } from './page-product-form/page-product-form.component';
import { PageProductListComponent } from './page-product-list/page-product-list.component';
import {MainContainerComponent} from "./main-container/main-container.component";
import {NavigatorComponent} from "./navigator/navigator.component";
import {ContentContainerComponent} from "./content-container/content-container.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    NavigatorComponent,
    ContentContainerComponent,
    PageMainComponent,
    PageProductFormComponent,
    PageProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

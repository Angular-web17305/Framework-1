import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AdminPageComponent } from './page/admin-page/admin-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { AboutComponent } from './page/about/about.component';
import { ProductDetaitComponent } from './page/product-detait/product-detait.component';
import { ProductAddComponent } from './page/product-add/product-add.component';
import { ProductUpdateComponent } from './page/product-update/product-update.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProductPageComponent } from './page/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    AdminPageComponent,
    HomePageComponent,
    PageNotFoundComponent,
    AboutComponent,
    ProductDetaitComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    DashboardComponent,
    ProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

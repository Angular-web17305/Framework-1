import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AdminAdminpageComponent } from './page/admin-adminpage/admin-adminpage.component';
import { AdminPageComponent } from './page/admin-page/admin-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { ProductDetailPageComponent } from './page/product-detail-page/product-detail-page.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { AdminComponent } from './page/admin/admin.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ProductDetaitComponent } from './page/product-detait/product-detait.component';
import { ProductAddComponent } from './page/product-add/product-add.component';
import { ProductUpdateComponent } from './page/product-update/product-update.component';
import { ServicesProductComponent } from './services/services.product/services.product.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    AdminAdminpageComponent,
    AdminPageComponent,
    HomePageComponent,
    AboutPageComponent,
    ProductDetailPageComponent,
    PageNotFoundComponent,
    AdminComponent,
    HomeComponent,
    AboutComponent,
    ProductDetaitComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    ServicesProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

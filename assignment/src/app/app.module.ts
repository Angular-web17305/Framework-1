import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';
import { UpdateProductComponent } from './pages/admin/update-product/update-product.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { HomePageComponent } from './pages/client/home-page/home-page.component';
import { ProductPageComponent } from './pages/client/product-page/product-page.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    DashboardComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    UpdateProductComponent,
    AddProductComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductDetailComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

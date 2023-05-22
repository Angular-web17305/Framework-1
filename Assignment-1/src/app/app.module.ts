import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './layouts/admin-layout/admin-page.component';
import { BasePageComponent } from './layouts/base-layout/base-page.component';
import { DashBoardPageComponent } from './page/adminPage/dash-board-page/dash-board-page.component';
import { AdminProductPageComponent } from './page/adminPage/admin-product-page/admin-product-page.component';
import { AboutPageComponent } from './page/basePage/about-page/about-page.component';
import { ProductDetailComponent } from './page/basePage/product-detail/product-detail.component';
import { ProductAddComponent } from './page/product-add/product-add.component';
import { ProductEditComponent } from './page/product-edit/product-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    BasePageComponent,
    DashBoardPageComponent,
    AdminProductPageComponent,
    AboutPageComponent,
    ProductDetailComponent,
    ProductAddComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

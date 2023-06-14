import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
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
import { ProductManagementComponent } from './pages/admin/product-management/product-management.component';
import { CategoryManagementComponent } from './pages/admin/category-management/category-management.component';
import { ShopingCartComponent } from './pages/client/shoping-cart/shoping-cart.component';
import { SignupComponent } from './pages/users/signup/signup.component';
import { AuthInterceptor } from './auth.interceptor';
import { SigninComponent } from './pages/users/signin/signin.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ListUserComponent } from './pages/users/list-user/list-user.component';
import { BuyItemComponent } from './pages/client/buy-item/buy-item.component';
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
    ProductManagementComponent,
    CategoryManagementComponent,
    ShopingCartComponent,
    SigninComponent,
    SignupComponent,
    ListUserComponent,
    BuyItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
      NgxWebstorageModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { HomePageComponent } from './pages/client/home-page/home-page.component';
import { ProductPageComponent } from './pages/client/product-page/product-page.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { UpdateProductComponent } from './pages/admin/update-product/update-product.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignupComponent } from './pages/users/signup/signup.component';
import { SigninComponent } from './pages/users/signin/signin.component';
import { LogoutComponent } from './pages/users/logout/logout.component';

const routes: Routes = [
  {
    path: '', component: ClientLayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {path:'signup', component: SignupComponent},
      {path:'signin', component: SigninComponent},
      { path: 'logout', component: LogoutComponent},
      { path: 'home', component: HomePageComponent },
      { path: 'product-page', component: ProductPageComponent },
      { path: 'product/:id', component: ProductDetailComponent },
    ]
  },

  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product-management', component: AddProductComponent },
      { path: 'product/add', component: AddProductComponent },
      { path: 'product/update/:id', component: UpdateProductComponent },
      { path: 'product-management', component: AddProductComponent },
      { path: 'category/add', component: AddCategoryComponent },
      { path: 'category/update/:id', component: UpdateCategoryComponent },
    ]
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

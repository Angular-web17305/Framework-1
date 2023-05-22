import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasePageComponent } from './layouts/base-layout/base-page.component';
import { AdminPageComponent } from './layouts/admin-layout/admin-page.component';
import { DashBoardPageComponent } from './page/adminPage/dash-board-page/dash-board-page.component';
import { AdminProductPageComponent } from './page/adminPage/admin-product-page/admin-product-page.component';
import { AboutPageComponent } from './page/basePage/about-page/about-page.component';
import { ProductDetailComponent } from './page/basePage/product-detail/product-detail.component';
import { ProductAddComponent } from './page/product-add/product-add.component';
import { ProductEditComponent } from './page/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '', component: BasePageComponent, children: [
      { path: 'about', component: AboutPageComponent },
      { path: 'product/:id', component: ProductDetailComponent },
    ]
  },
  {
    path: 'admin', component: AdminPageComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashBoardPageComponent },
      { path: 'product', component: AdminProductPageComponent },
      { path: 'product/add', component: ProductAddComponent },
      { path: 'product/:id/edit', component: ProductEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

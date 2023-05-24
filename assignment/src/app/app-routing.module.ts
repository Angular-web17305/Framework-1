import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { ProductAddComponent } from './page/product-add/product-add.component';
import { ProductUpdateComponent } from './page/product-update/product-update.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product', component: ProductPageComponent },
      { path: 'product/add', component: ProductAddComponent },
      { path: 'product/update/:id', component: ProductUpdateComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

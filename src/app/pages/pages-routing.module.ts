import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { DisplayCartComponent } from './components/display-cart/display-cart.component';

const routes: Routes = [
  {
    path: 'display-cart',
    component: DisplayCartComponent,
  },
  {
    path: 'detail-product/:id',
    component: DetailProductComponent,
  },
  {
    path: '',
    component: ViewProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../shared/material/material.module';

import { ViewProductsComponent } from './components/view-products/view-products.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { DisplayCartComponent } from './components/display-cart/display-cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderPageComponent } from './components/order-page/order-page.component';

@NgModule({
  declarations: [
    ViewProductsComponent,
    DetailProductComponent,
    DisplayCartComponent,
    OrderPageComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [ViewProductsComponent, DetailProductComponent],
})
export class PagesModule {}

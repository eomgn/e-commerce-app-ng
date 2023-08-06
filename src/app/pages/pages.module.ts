import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../shared/material/material.module';

import { ViewProductsComponent } from './components/view-products/view-products.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';

@NgModule({
  declarations: [ViewProductsComponent, DetailProductComponent],
  imports: [CommonModule, PagesRoutingModule, MaterialModule],
  exports: [ViewProductsComponent, DetailProductComponent],
})
export class PagesModule {}

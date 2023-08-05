import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../shared/material/material.module';

import { ViewProductsComponent } from './components/view-products/view-products.component';

@NgModule({
  declarations: [ViewProductsComponent],
  imports: [CommonModule, PagesRoutingModule, MaterialModule],
  exports: [ViewProductsComponent],
})
export class PagesModule {}

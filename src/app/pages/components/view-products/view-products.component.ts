import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { IProducts } from '../../interfaces/products';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css'],
})
export class ViewProductsComponent implements OnInit {
  dataProducts: IProducts[] = [];

  spinner: boolean = true;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.displayProducts();
  }

  displayProducts() {
    this.productsService.getProducts().subscribe((response: any) => {
      // console.log(response);
      this.dataProducts = response.products;

      this.spinner = !this.spinner;
    });
  }

  addCart(item: IProducts): void {
    this.productsService.addToCart(item);
  }
}

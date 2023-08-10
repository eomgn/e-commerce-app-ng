import { MatSnackbarService } from './../../../shared/services/mat-snackbar.service';
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

  constructor(
    private productsService: ProductsService,
    private matSnackbarService: MatSnackbarService
  ) {}

  ngOnInit(): void {
    this.displayProducts();

    // limpar localStorage
    localStorage.removeItem('[form]_name');
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
    this.matSnackbarService.openMessage('Product added to cart');
  }
}

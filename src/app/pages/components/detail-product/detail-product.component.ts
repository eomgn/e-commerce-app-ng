import { MatSnackbarService } from './../../../shared/services/mat-snackbar.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { IProducts } from '../../interfaces/products';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
})
export class DetailProductComponent implements OnInit, OnDestroy {
  productData!: IProducts;

  subscription = new Subscription();

  showAddCart: boolean = true;
  showRemoveCart: boolean = false;
  progressBar: boolean = true;

  constructor(
    private productService: ProductsService,
    private activedRoute: ActivatedRoute,
    private matSnackbarService: MatSnackbarService
  ) {}

  ngOnInit(): void {
    const id = this.activedRoute.snapshot.paramMap.get('id');

    this.subscription = this.productService
      .getProductByID(id)
      .subscribe((response) => {
        // console.log(response);
        this.productData = response;
        console.log(this.productData);

        this.progressBar = !this.progressBar;
      });
  }

  addToCart(item: IProducts) {
    this.showAddCart = false;
    this.showRemoveCart = true;

    this.productService.addToCart(item);
    this.matSnackbarService.openMessage('Product added to cart');
  }

  removeProduct(item: IProducts) {
    this.showAddCart = true;
    this.showRemoveCart = false;

    this.productService.removeToCart(item);

    this.matSnackbarService.openMessage('Product removed from cart');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

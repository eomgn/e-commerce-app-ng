import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { IProducts } from '../../interfaces/products';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
})
export class DetailProductComponent implements OnInit {
  productData!: IProducts;

  showAddCart: boolean = true;
  showRemoveCart: boolean = false;
  progressBar: boolean = true;

  constructor(
    private productService: ProductsService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activedRoute.snapshot.paramMap.get('id');

    this.productService.getProductByID(id).subscribe((response) => {
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
  }

  removeProduct(item: IProducts) {
    this.showAddCart = true;
    this.showRemoveCart = false;

    this.productService.removeToCart(item);
  }
}

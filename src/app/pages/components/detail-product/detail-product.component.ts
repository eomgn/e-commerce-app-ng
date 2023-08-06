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

  progressBar: boolean = true;

  constructor(
    private productService: ProductsService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activedRoute.snapshot.paramMap.get('id');

    id &&
      this.productService.getProductByID(id).subscribe((response) => {
        // console.log(response);
        this.productData = response;
        console.log(this.productData);

        this.progressBar = !this.progressBar;
      });
  }
}

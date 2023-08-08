import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { IProducts } from '../../interfaces/products';

@Component({
  selector: 'app-display-cart',
  templateUrl: './display-cart.component.html',
  styleUrls: ['./display-cart.component.css'],
})
export class DisplayCartComponent implements OnInit {
  dataSource!: IProducts[];
  displayedColumns: string[] = ['thumbnail', 'title', 'price', 'actions'];

  showMessage!: boolean;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.products().subscribe((products: any) => {
      this.dataSource = products;

      if (this.dataSource.length == 0) {
        this.showMessage = false;
      } else {
        this.showMessage = true;
      }
    });
  }

  removeItemCart(item: IProducts) {
    // console.log(item);
    this.productsService.removeToCart(item);
    this.dataSource = [...this.dataSource];
  }
}

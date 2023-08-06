import { ProductsService } from 'src/app/shared/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartList: number = 0;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.products().subscribe((cartLists) => {
      this.cartList = cartLists.length;
    });
  }
}

import { Router } from '@angular/router';
import { ProductsService } from './../../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css'],
})
export class OrderPageComponent implements OnInit {
  totalAmount: number = 0;

  // localStorage
  userStorage!: any;
  userShopp!: string;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // retornar aos produtos apos 3.5 segundos
    setTimeout(() => {
      this.router.navigate(['/']);

      this.productsService.removeAllItemsCart();
    }, 3500);

    // preço total
    this.totalAmount = this.productsService.calculateAmount();

    // usuario que efetuou a commpra
    let localStorageData = localStorage.getItem('[form]_name');

    this.userStorage = localStorageData;

    this.userShopp = JSON.parse(this.userStorage);
  }
}

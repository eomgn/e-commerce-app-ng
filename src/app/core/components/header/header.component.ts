import { ProductsService } from 'src/app/shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartList: number = 0;
  voltar!: boolean;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productsService.products().subscribe((cartLists) => {
      this.cartList = cartLists.length;
    });
  }

  // mostrar botão se estiver na rota /display-cart
  isActive(route: string): boolean {
    return this.router.isActive(route, false);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProducts } from 'src/app/pages/interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public cartListItems: any = [];
  private productList = new BehaviorSubject<any>([]);

  private readonly urlBase = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(this.urlBase);
  }

  getProductByID(id: any): Observable<IProducts> {
    const url = `${this.urlBase}/${id}`;

    return this.http.get<IProducts>(url);
  }

  /*
    criado a variavel cartListItems[] 
    e o metodo addToCart() da um push para adicionar o produtos clicado
    com um BehaviorSubject.next(this.cartListItems) para observar o valor que está sendo atualizado em cartListItems[]
  */
  addToCart(item: IProducts) {
    this.cartListItems.push(item);

    this.productList.next(this.cartListItems);
    console.log(this.cartListItems);
  }

  products() {
    return this.productList.asObservable();
  }

  /*
    iterando sobre cartListItems e sempre que o id do produto for igual ao do item o 
    cartListItems sera cortado, ou seja removido o item que possuir o id igual
  */
  removeToCart(item: IProducts) {
    this.cartListItems.forEach((data: IProducts, index: IProducts) => {
      if (item.id === data.id) {
        this.cartListItems.splice(index, 1);
      }
    });
    this.productList.next(this.cartListItems);
  }

  // remover todos os itens do carrinho
  removeAllItemsCart() {
    this.cartListItems = [];
    this.productList.next(this.cartListItems);
  }

  // calcular somatoria dos items do carrinho
  calculateAmount() {
    let total: number = 0;
    this.cartListItems.map((item: IProducts) => {
      total += item.price;
    });
    return total;
  }
}

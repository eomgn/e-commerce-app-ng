import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from 'src/app/pages/interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly urlBase = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(this.urlBase);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productsUrl } from '../configuration/Properties';
import { Observable } from 'rxjs';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(productsUrl);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(productsUrl, product);
  }
}

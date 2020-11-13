import { Injectable } from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _products: Array<Product> = [];

  constructor() { }

  public get products(): Array<Product> {
    const products: Array<Product> = JSON.parse(sessionStorage.getItem('products'))
    return products;
  }

  public set products(products: Array<Product>) {
    this._products = products;
    sessionStorage.setItem('products', JSON.stringify(products));
  }

}

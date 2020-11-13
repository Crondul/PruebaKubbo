import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {productsUrl, stocksUrl} from '../configuration/Properties';
import { Observable } from 'rxjs';
import {Stock} from "../model/stock";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }

  getStocks(idProduct): Observable<Array<Stock>> {
    return this.http.get<Array<Stock>>(stocksUrl + '?idProduct=' + idProduct);
  }

  createStock(stock: Stock): Observable<Stock> {
    return this.http.post<Stock>(stocksUrl, stock);
  }
}

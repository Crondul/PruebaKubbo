import { Component } from '@angular/core';
import { ProductsService } from './services/products.service';
import { StocksService } from './services/stocks.service';
import { WarehousesService } from './services/warehouses.service';
import { stringify } from 'querystring';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){};

  ngOnInit(): void {

  }

}

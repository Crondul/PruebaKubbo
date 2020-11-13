import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Stock} from "../../../model/stock";
import {Subscription} from "rxjs";
import {StocksService} from "../../../services/stocks.service";
import {ActivatedRoute, Router} from "@angular/router";
import {WarehousesService} from "../../../services/warehouses.service";
import {Warehouse} from "../../../model/warehouse";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-new-stock',
  templateUrl: './new-stock.component.html',
  styleUrls: ['./new-stock.component.scss']
})
export class NewStockComponent implements OnInit, OnDestroy {

  private idProduct : number;

  private stocksSubscription: Subscription;
  private queryParamsSubscriptor: Subscription;
  private warehousesSubscription: Subscription;

  formGroup: FormGroup;
  warehouses: Warehouse[] = [];

  constructor(
      private formBuilder: FormBuilder,
      private stocksService: StocksService,
      private warehouseService: WarehousesService,
      private route: ActivatedRoute,
      private location: Location,
      private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getWarehouses();
    this.initForm();

    this.queryParamsSubscriptor = this.route.queryParams.subscribe(params => {

      if(params['idProduct']) {
        this.idProduct = params['idProduct'];
      }
    });
  }

  ngOnDestroy() {
    if(this.stocksSubscription !== null && typeof this.stocksSubscription !== 'undefined') {
      this.stocksSubscription.unsubscribe();
    }

    if(this.queryParamsSubscriptor !== null && typeof this.queryParamsSubscriptor !== 'undefined') {
      this.queryParamsSubscriptor.unsubscribe();
    }

    if(this.warehousesSubscription !== null && typeof this.warehousesSubscription !== 'undefined') {
      this.warehousesSubscription.unsubscribe();
    }
  }

  getWarehouses() {
    this.warehousesSubscription = this.warehouseService.getWarehouses().subscribe(
        (response: Warehouse[]) => {
          if(response) {
            this.warehouses = response;
          }
        }
    );
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      quantity: ['', Validators.required],
      status: ['', Validators.required],
      warehouse: ['', Validators.required]
    })
  }

  addStock(formValues) {
    const stock: Stock = this.createStock(formValues);
    this.stocksSubscription = this.stocksService.createStock(stock).subscribe(
        (response: Stock) => {
          if(response) {
            this.openSnackBar('Stock Added', 'Close');
          }
        },
        error => {
          this.openSnackBar('Error adding the stock', 'Close');
        }
    );
  }

  createStock(formValues): Stock {
    const stock = new Stock();

    if(formValues['quantity']) {
      stock.quantity = formValues['quantity'];
    }

    if(formValues['status']) {
      stock.status = formValues['status'];
    }

    if(formValues['warehouse']) {
      stock.idWarehouse = formValues['warehouse'];
    }

    stock.idProduct = this.idProduct;

    return stock;
  }

  goBack() {
    this.location.back();
  }

  get quantity() { return this.formGroup.get('quantity'); }
  get status() { return this.formGroup.get('status'); }
  get warehouse() { return this.formGroup.get('warehouse'); }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}

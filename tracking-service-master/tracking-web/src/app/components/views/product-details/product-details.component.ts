import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {StorageService} from "../../../services/storage.service";
import {Product} from "../../../model/product";
import {MatTableDataSource} from "@angular/material/table";
import {StocksService} from "../../../services/stocks.service";
import {Stock} from "../../../model/stock";
import {MatPaginator} from "@angular/material/paginator";
import {Location} from "@angular/common";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, AfterViewInit, OnDestroy {

    queryParamsSubscriptor: Subscription;
    stocksSubscription: Subscription;

    product: Product = new Product();
    idProduct = {}
    dataSource: MatTableDataSource<Stock> = new MatTableDataSource<Stock>();;
    displayedColumns: string [] = ['id', 'quantity', 'status', 'nameWarehouse', 'cityWarehouse'];
    private stocks: Stock[];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        private route: ActivatedRoute,
        private storageService: StorageService,
        private stockService: StocksService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getProduct();
        this.loadDataSource();
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    ngOnDestroy() {
        if(this.queryParamsSubscriptor !== null && typeof this.queryParamsSubscriptor !== 'undefined') {
            this.queryParamsSubscriptor.unsubscribe();
        }

        if(this.stocksSubscription !== null && typeof this.stocksSubscription !== 'undefined') {
            this.stocksSubscription.unsubscribe();
        }
    }

    getProduct() {
        this.queryParamsSubscriptor = this.route.queryParams.subscribe(params => {
            const products: Product[] = this.storageService.products;

            if(params['id']) {

                for(let i = 0 ; i < products.length; i++) {
                    const product: Product = products[i];
                    if(params['id'] == product._id) {
                        this.product = product;
                        this.idProduct = { idProduct: product._id }
                    }
                }
            }
        });
    }

    loadDataSource() {
        this.stocksSubscription = this.stockService.getStocks(this.product._id).subscribe(
            (response: Stock[]) => {
                if(response) {
                    this.stocks = response;
                    this.dataSource = new MatTableDataSource<Stock>(this.stocks);
                    this.dataSource.paginator = this.paginator;
                }
            }
        );
    }

    goBack() {
        this.location.back();
    }

}

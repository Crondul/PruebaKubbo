import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {ProductsService} from "../../../services/products.service";
import {Product} from "../../../model/product";
import {Subscription} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {StorageService} from "../../../services/storage.service";
import {Animations} from "../../../utils/animations";
import {MatPaginator} from "@angular/material/paginator";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    animations: [Animations]
})
export class ProductsComponent implements OnInit, AfterViewInit, OnDestroy {
    private products: Product[];
    dataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>();
    displayedColumns: string [] = ['id', 'name', 'sku', 'barcode', 'price', 'goToDetails'];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    private productsSubscription: Subscription;

    showNewProduct: boolean = false;
    textShowHide: string = 'ADD NEW PRODUCT';

    state: string = 'default';
    stateHidden: string = 'hidden';

    constructor(
        private productsService: ProductsService,
        private storageService: StorageService
    ) {}

    ngOnInit() {
        this.loadDataSource();
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    ngOnDestroy() {
        if(this.productsSubscription !== null && typeof this.productsSubscription !== 'undefined') {
            this.productsSubscription.unsubscribe();
        }
    }

    loadDataSource() {
        this.productsSubscription = this.productsService.getProducts().subscribe(
            (response: Product[]) => {
                if(response) {
                    this.products = response;
                    this.dataSource = new MatTableDataSource<Product>(this.products);
                    this.dataSource.paginator = this.paginator;
                    this.storageService.products = response;
                }
            }
        );
    }

    newProductAdded() {
        this.showHideNewProduct();
        this.loadDataSource();
    }

    showHideNewProduct() {
        this.rotateAndShow();
        this.showNewProduct = !this.showNewProduct;
    }

    private rotateAndShow() {
        this.state = (this.state === 'default' ? 'rotated' : 'default');
        this.stateHidden = (this.stateHidden === 'hidden' ? 'shown' : 'hidden');
    }
}
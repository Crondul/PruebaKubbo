import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../model/product";
import {MatTableDataSource} from "@angular/material/table";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit, OnDestroy {

  @Output() newProductAdded: EventEmitter<void> = new EventEmitter<void>();

  private productsSubscription: Subscription;

  formGroup: FormGroup;

  constructor(
      private productsService: ProductsService,
      private formBuilder: FormBuilder,
      private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy() {
    if(this.productsSubscription !== null && typeof this.productsSubscription !== 'undefined') {
      this.productsSubscription.unsubscribe();
    }
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      sku: ['', Validators.required],
      barcode: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', Validators.required]
    })
  }

  addProduct(formValues) {
    const product: Product = this.createProduct(formValues);
    this.productsSubscription = this.productsService.createProduct(product).subscribe(
        (response: Product) => {
          if(response) {
            this.newProductAdded.emit();
            this.openSnackBar('Product Added', 'Close');
          }
        },
        error => {
          this.openSnackBar('Error adding the product', 'Close');
        }
    );
  }

  createProduct(formValues): Product {
    const product = new Product();

    if(formValues['name']) {
      product.name = formValues['name'];
    }

    if(formValues['sku']) {
      product.sku = formValues['sku'];
    }

    if(formValues['barcode']) {
      product.barcode = formValues['barcode'];
    }

    if(formValues['image']) {
      product.image = formValues['image'];
    }

    if(formValues['price']) {
      product.price = formValues['price'];
    }

    product.enabled = false;

    return product;
  }

  get name() { return this.formGroup.get('name'); }
  get sku() { return this.formGroup.get('sku'); }
  get barcode() { return this.formGroup.get('barcode'); }
  get image() { return this.formGroup.get('image'); }
  get price() { return this.formGroup.get('price'); }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}

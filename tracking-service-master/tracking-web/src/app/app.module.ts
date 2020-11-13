import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {ProductsComponent} from "./components/views/products/products.component";
import { NewProductComponent } from './components/new-product/new-product.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { ProductDetailsComponent } from './components/views/product-details/product-details.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import { NewStockComponent } from './components/views/new-stock/new-stock.component';
import {MatSelectModule} from "@angular/material/select";
import { HeaderComponent } from './components/header/header.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NewProductComponent,
    ProductDetailsComponent,
    NewStockComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatSnackBarModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

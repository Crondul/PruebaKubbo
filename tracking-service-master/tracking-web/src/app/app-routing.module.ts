import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from "./components/views/products/products.component";
import {ProductDetailsComponent} from "./components/views/product-details/product-details.component";
import {NewStockComponent} from "./components/views/new-stock/new-stock.component";
import {TranslationResolverService} from "./services/translation-resolver.service";


const routes: Routes = [
  {
    path: '',
    resolve: {
      lang: TranslationResolverService
    },
    children: [
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'productDetails',
        component: ProductDetailsComponent
      },
      {
        path: 'newStock',
        component: NewStockComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

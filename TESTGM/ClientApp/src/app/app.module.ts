import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './Modules/Product/ProductList/product-list.component';
import { ProductDetailComponent } from './Modules/Product/ProductDetail/ProductDetail.Component';
import { CategoryListComponent } from './Modules/Category/CategoryList/CategoryList.Component';
import { CategoryDetailsComponent } from './Modules/Category/CategoryDetail/CategoryDetail.Component';
import { AddItemModalComponent } from './Components/add-item-modal/add-item-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    AddItemModalComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'categories', component: CategoryListComponent },
      { path: 'categories/:id', component: CategoryDetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

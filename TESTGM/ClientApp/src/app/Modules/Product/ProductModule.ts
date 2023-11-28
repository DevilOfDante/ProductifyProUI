import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddItemModalComponent } from '../../Components/add-item-modal/add-item-modal.component';
import { GridViewComponent } from '../../Components/grid-view/grid-view.component';
import { ProductDetailComponent } from './ProductDetail/ProductDetail.Component';
import { ProductListComponent } from './ProductList/product-list.component';

@NgModule({
  declarations: [
    AddItemModalComponent,
    GridViewComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    AddItemModalComponent,
    GridViewComponent,
    ProductListComponent,
    ProductDetailComponent
  ]
})
export class ProductModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoryListComponent } from './CategoryList/CategoryList.Component';
import { CategoryDetailsComponent } from './CategoryDetail/CategoryDetail.Component';
import { CategoryService } from '../../Services/Category.Services';

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [CategoryService], // Provide the CategoryService
  exports: [
    CategoryListComponent,
    CategoryDetailsComponent
  ]
})
export class CategoryModule { }

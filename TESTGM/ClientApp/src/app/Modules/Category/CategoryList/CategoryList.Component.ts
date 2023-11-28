import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../Services/Category.Services'; // Import CategoryService
import { Category } from '../../../Models/Category'; // Import Category model
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddItemModalComponent } from '../../../Components/add-item-modal/add-item-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-CategoryList',
  templateUrl: './CategoryList.component.html',
  styleUrls: ['./CategoryList.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private router: Router,
    public categoryService: CategoryService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(
      (data: Category[]) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  openModal(isProduct: boolean) {
    const modalRef = this.modalService.open(AddItemModalComponent, { size: 'lg' });
    modalRef.componentInstance.isProduct = isProduct;
  }

  navigateToCategoryDetails(categoryId: string) {
    this.router.navigate(['/categories', categoryId]);
  }
}

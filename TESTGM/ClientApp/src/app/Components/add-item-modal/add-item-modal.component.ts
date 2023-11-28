import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../../Services/Category.Services';
import { ProductService } from '../../Services/Product.Services';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html'
})
export class AddItemModalComponent {
  modalRef: NgbModalRef | null = null;
  @Output() addItem = new EventEmitter<any>();
  @Input() isProduct: boolean = true; 
  newItemForm: any; 

  constructor(
    private modalService: NgbModal,
    public productService: ProductService,
    private categoryService: CategoryService

  ) { }

  openModal(content: any) {
    this.modalRef = this.modalService.open(content, { centered: true });
  }

  onSave(data: any) {
    if (this.isProduct) {
      // Save operation for product
      this.productService.addProduct(data).subscribe(
        (response) => {
          this.addItem.emit(response);
          this.modalService.dismissAll();
          this.productService.getAllProducts();
        },
        (error) => {
          console.error('Error while saving product:', error);
          alert('An error occurred while saving the product.'); // Visual alert for error
        }
      );
    } else {
      // Save operation for category
      this.categoryService.addCategory(data).subscribe(
        (response) => {
          this.addItem.emit(response);
          this.modalService.dismissAll();
          this.categoryService.getCategories();
        },
        (error) => {
          console.error('Error while saving category:', error);
          alert('An error occurred while saving the category.'); // Visual alert for error
        }
      );
    }
  }

  dismissModal() {
    console.error(this.modalRef);
    this.modalService.dismissAll();
  }
}

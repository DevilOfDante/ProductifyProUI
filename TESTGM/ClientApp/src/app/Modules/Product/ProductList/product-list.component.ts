import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; // Importa NgbModal
import { AddItemModalComponent } from '../../../Components/add-item-modal/add-item-modal.component';
import { ProductService } from '../../../Services/Product.Services'; // Import ProductService
import { Router } from '@angular/router';
import { Product } from '../../../Models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})
export class ProductListComponent {
  products: Product[] = []; // Array to hold products

  constructor(
    private router: Router,
    public productService: ProductService,
    private modalService: NgbModal
  ) { } 

  openModal(isProduct: boolean) {
    const modalRef = this.modalService.open(AddItemModalComponent, { size: 'lg' });
    modalRef.componentInstance.isProduct = isProduct; 
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() : void {
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  navigateToProductDetails(productId: string) {
    this.router.navigate(['/products', productId]); 
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../Services/Product.Services'; // Import ProductService

@Component({
  selector: 'app-ProductDetail',
  templateUrl: './ProductDetail.component.html'
})
export class ProductDetailComponent implements OnInit {
  productId: string | null = null;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService 
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      if (this.productId) {
        this.productService.getProductById(this.productId).subscribe(
          (data: any) => {
            this.product = data;
          },
          (error) => {
            console.error('Error fetching product details:', error);
          }
        );
      }
    });
  }

  onSave(updatedProduct: any) {
    if (updatedProduct) {
      this.productService.updateProduct(updatedProduct).subscribe(
        (updatedData: any) => {
          this.product = updatedData;
          console.log('Product updated successfully:', updatedData);
          this.router.navigate(['/products']); 
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    } else {
      console.warn('No product data to save.');
    }
  }

  deleteProduct() {
    if (this.productId) {
      this.productService.deleteProduct(this.productId).subscribe(
        () => {
          this.router.navigate(['/products']);
        },
        (error) => {
          console.error('Error deleting product:', error);
        }
      );
    }
  }

  goBack() {
    this.router.navigate(['/products']); 
  }
}

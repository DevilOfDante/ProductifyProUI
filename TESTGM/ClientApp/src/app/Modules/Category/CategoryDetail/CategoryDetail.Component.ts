import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../Services/Category.Services';

@Component({
  selector: 'app-CategoryDetail',
  templateUrl: './CategoryDetail.component.html'
})
export class CategoryDetailsComponent implements OnInit {
  categoryId: string | null = null;
  category: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService 
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id');
      if (this.categoryId) {
        this.categoryService.getCategoryById(this.categoryId).subscribe(
          (data: any) => {
            this.category = data;
          },
          (error) => {
            console.error('Error fetching category details:', error);
          }
        );
      }
    });
  }

  onSave(updatedCategory: any) {
    if (updatedCategory) {
      this.categoryService.updateCategory(updatedCategory).subscribe(
        (updatedData: any) => {
          this.category = updatedData;
          console.log('Category updated successfully:', updatedData);
          this.router.navigate(['/categories']); 
        },
        (error) => {
          console.error('Error updating category:', error);
        }
      );
    } else {
      console.warn('No category data to save.');
    }
  }

  deleteCategory() {
    if (this.categoryId) {
      this.categoryService.deleteCategory(this.categoryId).subscribe(
        () => {
          this.router.navigate(['/categories']);
        },
        (error) => {
          console.error('Error deleting category:', error);
        }
      );
    }
  }

  goBack() {
    this.router.navigate(['/categories']);
  }
}

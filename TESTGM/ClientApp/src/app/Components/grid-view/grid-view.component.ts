import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html'
})
export class GridViewComponent {
  @Input() items: any[] = [];
  @Input() isProductTable: boolean = true; // Indicates whether it's the product table or category table

  displayedColumns: string[] = []; // Columns to be displayed based on the table type

  constructor() {
    this.setDisplayedColumns();
  }

  private setDisplayedColumns() {
    if (this.isProductTable) {
      this.displayedColumns = ['ID', 'Name', 'Description', 'Price', 'CategoryId', 'Color'];
    } else {
      this.displayedColumns = ['ID', 'Name', 'Description'];
    }
  }
}

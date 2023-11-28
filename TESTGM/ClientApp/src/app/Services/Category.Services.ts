import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../Models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://localhost:7135/api/categories/';
  public categories: Category[] = [];

  constructor(private http: HttpClient) { }

  // Fetch all categories
  getCategories(): Observable<Category[]> {
    const httpGet = this.http.get<Category[]>(this.apiUrl);
    httpGet.subscribe(s => this.categories = s);
    return httpGet;
  }

  // Fetch a single category by ID
  getCategoryById(id: string): Observable<Category> {
    const url = `${this.apiUrl}${id}`;
    return this.http.get<Category>(url);
  }

  // Add a new category
  addCategory(category: Category): Observable<Category> {
    const url = `${this.apiUrl}Add/`;
    return this.http.post<Category>(url, category);
  }

  // Update an existing category
  updateCategory(category: Category): Observable<Category> {
    const url = `${this.apiUrl}UpdateCategory/${category.id}`;
    return this.http.put<Category>(url, category);
  }

  // Delete a category by ID
  deleteCategory(id: string): Observable<Category> {
    const url = `${this.apiUrl}DeleteCategory/${id}`;
    return this.http.delete<Category>(url);
  }
}

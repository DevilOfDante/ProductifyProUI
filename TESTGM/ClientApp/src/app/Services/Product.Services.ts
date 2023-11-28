import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:7135/api/products/';
  public products: Product[] = [];

  constructor(private http: HttpClient) { }

  // Fetch all products
  getAllProducts(): Observable<Product[]> {
    const httpGet = this.http.get<Product[]>(this.apiUrl);
    httpGet.subscribe(s => this.products = s);
    return httpGet;
  }

  // Fetch a single product by ID
  getProductById(id: string): Observable<Product> {
    const url = `${this.apiUrl}${id}`;
    return this.http.get<Product>(url);
  }

  // Add a new product
  addProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}Add/`;
    return this.http.post<Product>(url, product);
  }

  // Update an existing product
  updateProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}UpdateProduct/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  // Delete a product by ID
  deleteProduct(id: string): Observable<Product> {
    const url = `${this.apiUrl}DeleteProduct/${id}`;
    return this.http.delete<Product>(url);
  }
}

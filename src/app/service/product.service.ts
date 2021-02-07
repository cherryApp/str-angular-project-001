import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  apiUrl: string = 'http://localhost:3000/products';

  constructor(
    private http: HttpClient
    ) { }

  /*
    ------------- MÁSODIK FELVONÁS METÓDUSAI -------------
  */

      getAll(): Observable<Product[]> {
	    return this.http.get<Product[]>(this.apiUrl);
	  }

	  get(product: Product): Observable<Product> {
	    return this.http.get<Product>(`${this.apiUrl}/${product.id}`);
	  }

	  create(product: Product): Observable<Product> {
	    return this.http.post<Product>(this.apiUrl, product);
	  }

	  update(product: Product): Observable<Product> {
	    return this.http.patch<Product>(`${this.apiUrl}/${product.id}`, product);
	  }

	  remove(product: Product): Observable<Product> {
	    return this.http.delete<Product>(`${this.apiUrl}/${product.id}`);
	  }

}
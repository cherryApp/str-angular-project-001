import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { Category } from '../../model/category';
import { ProductService } from '../../service/product.service';
import { CategoryService } from '../../service/category.service';
import { Observable } from 'rxjs';    // <- második felvonás

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  productList$: Observable<Product[]> = this.productService.getAll();

  catid:number = 2;
  phrase: string = '';

  categoryList: Category[] = this.categoryService.list;

  constructor(private productService: ProductService, private categoryService: CategoryService) { }
 
  ngOnInit(): void {
  }

}
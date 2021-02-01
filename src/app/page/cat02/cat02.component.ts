import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { Category } from '../../model/category';
import { ProductService } from '../../service/product.service';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  productList: Product[] = this.productService.list;
  categoryList: Category[] = this.categoryService.list;
  
  cat = 2;
  phrase: string = '';

  constructor(
    private productService: ProductService, private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
  }

}
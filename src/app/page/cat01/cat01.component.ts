import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { Category } from '../../model/category';
import { ProductService } from '../../service/product.service';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  productList: Product[] = this.productService.list;
  categoryList: Category[] = this.categoryService.list;
  
  catid:number = 1;
  phrase: string = '';

  constructor(
    private productService: ProductService, private categoryService: CategoryService,
  ) { }

 
  ngOnInit(): void {
  }

}

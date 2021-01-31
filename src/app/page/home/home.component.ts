import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  product = this.productService.getCard(1);
  productsCategory = this.productService.allProductsInCategory(1);
  featuredList = this.productService.fiveRandomProductsInCategory(1);
  productList: Product[] = this.productService.list;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }



}

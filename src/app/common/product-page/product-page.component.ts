import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  @Input() featuredList: Product[] = this.productService.fiverandomProductsinCategory(1)
  
  const topFiveFeaturedProducts: Product[] = this.products.filter( product => product.featured )
      .sort( () => 0.5 - Math.random())
      .slice(0, 5);
  
  constructor() { }

  
  ngOnInit(): void {
  }

  
}

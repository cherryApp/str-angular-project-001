import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
   @Input() products: Product[] = [];  
    @Output() delProduct: EventEmitter<Product> = new EventEmitter();  
  
//home-component.html-be
//<h3>Featured Products</h3>
//<app-product-page [products]= "featuredProducts"></app-product-page>
// ---------------

//@Input() featuredList: Product[] = this.productService.fiverandomProductsinCategory(1)
//const topFiveFeaturedProducts: Product[] = this.products.filter( product => product.featured )
//.sort( () => 0.5 - Math.random())
//.slice(0, 5);


  constructor() { }

  
  ngOnInit(): void {
  }

  
}

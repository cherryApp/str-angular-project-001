import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import {ProductService} from 'src/app/service/product-service';
import {ProductCardComponent} from '????src/app/common/product-flip\product-flip.component???';

@Component({
  selector: 'app-product-flip',
  templateUrl: './product-flip.component.html',
  styleUrls: ['./product-flip.component.scss']
})
export class ProductFlipComponent implements OnInit {

  list: Product[] = ProductService.list;

  FeaturedProductFlipList: Product[] = this.list.filter  (product => product.featured === true )
  // random kell kiválsaztni

  ActiveProductFlipList: Product[] = this.list.filter  (product => product.active === true )
  // random kell kiválsaztni

  cat1ProductFlipList: Product[] = this.list.filter  (product => product.catId == 1 && product.featured === true )
  // random kell kiválsaztni )


  cat2ProductFlipList: Product[] = this.list.filter  (product => product.catId == 2 && product.featured === true)
  // random kell kiválsaztni

  constructor() { }

  ngOnInit(): void {
  }

}

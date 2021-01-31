import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-pager',
  templateUrl: './product-pager.component.html',
  styleUrls: ['./product-pager.component.scss']
})
export class ProductPagerComponent implements OnInit {
  
  @Input() products: Product[] = [];
  @Input() cat: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
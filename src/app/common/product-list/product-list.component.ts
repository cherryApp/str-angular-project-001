import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() phraseString: string = '';

  currentProduct: Product = new Product();

  columnKey: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSelectProduct(product: Product): void {
    this.currentProduct = product;
  }


  onClumnSelect(key: string): void {
    this.columnKey = key;
  }
}
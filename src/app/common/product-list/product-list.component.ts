import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() phraseString: string = '';
  
  @Input() products: Product[] = [];
  
  @Input() catid: number = 0;

  currentProduct: Product = new Product();

  constructor() {
    this.onStartPhrase();
  }

  ngOnInit(): void {
  }

  onChangePhrase(event: Event): void {
    this.phraseString = (event.target as HTMLInputElement).value;
  }

  onStartPhrase(): void {
    this.phraseString = '';
  }

}
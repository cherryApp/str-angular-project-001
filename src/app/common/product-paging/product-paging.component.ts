import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ProductCard } from '../product-card';

@Component({
  selector: 'app-product-paging',
  templateUrl: './product-paging.component.html',
  styleUrls: ['./product-paging.component.scss']
})
export class ProductPagingComponent implements OnInit {

  @Input() actionCards: number[] = [1, 2, 3, 4, 5];
  productCard: ProductCard = new ProductCard();


  constructor() { }

  ngOnInit(): void {
  }



}

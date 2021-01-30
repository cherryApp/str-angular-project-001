import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';


@Component({
  selector: 'app-product-paging',
  templateUrl: './product-paging.component.html',
  styleUrls: ['./product-paging.component.scss']
})
export class ProductPagingComponent implements OnInit {

  @Input() product: Product;


  constructor() { }

  ngOnInit(): void {
  }



}

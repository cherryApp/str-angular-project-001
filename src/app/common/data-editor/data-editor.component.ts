import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Observable } from 'rxjs';
import { ITableCol } from 'src/app/service/config.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  @Output() updateClick: EventEmitter<Product> = new EventEmitter();
  @Output() deleteClick: EventEmitter<Product> = new EventEmitter();

  @Input() products: Product[] = [];
  @Input() cols: ITableCol[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  onUpdate(product: Product): void {
    this.updateClick.emit(product);
  }

  onDelete(product: Product): void {
    this.deleteClick.emit(product);
  }

}
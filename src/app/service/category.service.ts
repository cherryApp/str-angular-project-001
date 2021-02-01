import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  list: Category[] = [  {"id":1,"name":"Hazai termékek","description":"Hazai termékek kategóriája"},
                        {"id":2,"name":"Import termékek","description":"Import termékek kategóriája"}];

  constructor() { }
}
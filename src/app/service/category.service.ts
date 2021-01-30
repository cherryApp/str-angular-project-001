import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  list: Category[] = [
    {
      id: 1,
      name: "Ifjúsági",
      description: "14 éves kor alatti irodalom"
    },
    {
      id: 2,
      name: "Szépirodalom",
      description: "hazai és külhoni próza"
    },
    {
      id: 3,
      name: "Életmód",
      description: "szakácskönyvek és gasztronómia"
    },
    {
      id: 4,
      name: "Útikönyvek",
      description: "hazai és külhoni tájakon"
    },
    {
      id: 5,
      name: "Életrajz",
      description: "hírességek élete"
    },
  ]

  constructor() { }

  getCategoryId(name: string): number {
    const obj = this.list.find(item => item.name == name)
    return obj ? obj.id : null;
  }
}

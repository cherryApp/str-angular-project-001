import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

export interface ITableCol {
  key: string;
  text: string;
  editable?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Arrow FUN Webshop';

  menuItems: IMenuItem[] = [
    {text: 'Home', link: '/', icon: 'home'},
    {text: 'Vitaminok', link: '/cat01'},
    {text: 'Ásványi anyagok', link: '/cat02'},
  ];

  tableCols: ITableCol[] = [
    {key: 'id', text: '#', editable: false},
    {key: 'catId', text: '#', editable: true},
    {key: 'name', text: 'Fname', editable: true},
    {key: 'description', text: 'Lname', editable: true},
    {key: 'image', text: 'Email', editable: true},
    {key: 'price', text: 'Gender', editable: true},
    {key: 'stock', text: 'IP', editable: true},
    {key: 'featured', text: 'IP', editable: true},
    {key: 'active', text: 'IP', editable: true},
  ];

  constructor() { }
}

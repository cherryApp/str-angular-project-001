import { Injectable } from '@angular/core';

export interface ITableCol {
  key: string;
  text: string;
  editable?: boolean;
}

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'FOURkoló Élelmiszer Webáruház';

  tableCols: ITableCol[] = [
    {key: 'id', text: '#', editable: false},
    {key: 'catId', text: 'kategória', editable: true},
    {key: 'name', text: 'név', editable: true},
    {key: 'description', text: 'leírás', editable: true},
    {key: 'image', text: 'kép', editable: true},
    {key: 'price', text: 'ár', editable: true},
    {key: 'stock', text: 'készlet', editable: true},
    {key: 'featured', text: 'kiemelt', editable: true},
    {key: 'active', text: 'aktív', editable: true},
  ];

  menuItems: IMenuItem[] = [
    {text: 'Főoldal', link: '/', icon: 'home'},
    {text: 'Hazai termékek', link: '/cat01'},
    {text: 'Import termékek', link: '/cat02'},
    {text: 'Admin', link: '/admin'},
  ];

  constructor() { }
}